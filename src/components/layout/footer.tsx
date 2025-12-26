'use client'
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Activity } from "react";
import { footerData } from "@/const/index.const";
import SocialMediaLinks from "@/components/custom/social-media.links";
import { useTranslations } from 'next-intl';

function Footer() {
    const pathname = usePathname();
    const router = useRouter();
    const t = useTranslations('Footer');

    const handleHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('/#') && pathname !== '/') {
            e.preventDefault();
            const hash = href.replace('/', '');
            sessionStorage.setItem('scrollToHash', hash);
            router.push(href);
        }
    };

    return (
        <footer
            id="contact"
            className="mt-[45px] lg:mt-0 scroll-mt-[120px] bg-[#F9F9F9]"
        >
            <div className="lg:flex lg:justify-between lg:container lg:mx-auto">
                {/* Logo + Description */}
                <nav className="py-6 lg:px-6 lg:py-9 text-center lg:text-left">
                    <Link className="inline-block" href="/">
                        <img src="/img/mobile-logo.svg" alt="logo" />
                    </Link>

                    <p className="leading-4 mb-3 text-xs md:text-sm md:leading-6 max-w-[293px] md:mt-[6px] mx-auto lg:mx-0 text-[#00000061]">
                        {t('description')}
                    </p>
                    <div className="lg:block flex justify-center">
                        <SocialMediaLinks />
                    </div>
                </nav>
                <div className="text-center lg:flex gap-15 text-sm lg:px-6 lg:py-9 text-[#00000099] space-y-7 pb-10">
                    {footerData.sections.map((section, index) => (
                        <div key={index} className="lg:text-left lg:pr-6">

                            <h3 className="font-semibold text-[13px] leading-[20px] lg:text-[16px] lg:leading-6 text-[#404145] mb-2">
                                {t(`sections.${section.titleKey}`)}
                            </h3>

                            <ul className="space-y-3 text-xs lg:text-[16px] lg:leading-6 leading-[16px]">
                                {section.links.map((link, i) => {
                                    const isExternal =
                                        link.href.startsWith('mailto:') ||
                                        link.href.startsWith('http');

                                    return (
                                        <li
                                            key={i}
                                            className="hover:text-[#0F820F] transition-colors"
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={
                                                    !isExternal
                                                        ? (e) => handleHashLinkClick(e, link.href)
                                                        : undefined
                                                }
                                            >
                                                {t(`links.${link.labelKey}`)}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                    {pathname !== "/" && (
                        <Activity mode="visible">
                            <div className="flex lg:hidden justify-center gap-3 pt-4">
                                <img src="/img/store.svg" alt="App Store" className="h-[40px]" />
                                <img src="/img/apple.svg" alt="Google Play" className="h-[40px]" />
                            </div>
                        </Activity>
                    )}
                </div>
            </div>
            <div className="hidden text-sm leading-6 lg:container lg:mx-auto border-t border-[#EBEBEB] text-[#00000061] lg:block pt-6 pb-8 px-6">
                <p>{t('copyright')}</p>
            </div>
        </footer>
    );
}

export default Footer;
