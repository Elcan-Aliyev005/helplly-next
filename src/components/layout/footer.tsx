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

    const getLinkTranslationKey = (href: string): string | null => {
        if (href.startsWith('/#')) {
            const hash = href.replace('/#', '');
            const hashMap: Record<string, string> = {
                'why-us': 'about',
                'contact': 'contact',
                'faq': 'faq'
            };
            return hashMap[hash] || null;
        }
        if (href.includes('terms-of-service')) {
            return 'termsOfService';
        }
        if (href.includes('privacy-and-policy')) {
            return 'privacyPolicy';
        }
        return null;
    };

    const getSectionTitleKey = (title: string): string | null => {
        const titleMap: Record<string, string> = {
            'Şirkət': 'sections.company',
            'Company': 'sections.company',
            'Компания': 'sections.company',
            'Əlaqə': 'sections.contact',
            'Contact': 'sections.contact',
            'Контакты': 'sections.contact',
            'Policies': 'sections.policies',
            'Политики': 'sections.policies'
        };
        return titleMap[title] || null;
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
                    {footerData.sections.map((section, index) => {
                        const sectionTitleKey = getSectionTitleKey(section.title);
                        const sectionTitle = sectionTitleKey ? t(sectionTitleKey as any) : section.title;

                        return (
                            <div key={index} className="lg:text-left lg:pr-6">
                                <h3 className="font-semibold text-[13px] leading-[20px] lg:text-[16px] lg:leading-6 text-[#404145] mb-2">
                                    {sectionTitle}
                                </h3>

                                <ul className="space-y-3 text-xs lg:text-[16px] lg:leading-6 leading-[16px]">
                                    {section.links.map((link, i) => {
                                        if (link.href.startsWith('mailto:') || link.href.startsWith('http')) {
                                            return (
                                                <li
                                                    key={i}
                                                    className="hover:text-[#0F820F] cursor-pointer"
                                                >
                                                    <Link href={link.href}>
                                                        {link.label}
                                                    </Link>
                                                </li>
                                            );
                                        }

                                        const translationKey = getLinkTranslationKey(link.href);
                                        const translatedLabel = translationKey
                                            ? t(`links.${translationKey}` as any)
                                            : link.label;

                                        return (
                                            <li
                                                key={i}
                                                className="hover:text-[#0F820F] cursor-pointer"
                                            >
                                                <Link
                                                    href={link.href}
                                                    onClick={(e) => handleHashLinkClick(e, link.href)}
                                                >
                                                    {translatedLabel}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}

                    <Activity mode={pathname === "/" ? "hidden" : "visible"}>
                        <div className="flex lg:hidden justify-center gap-3 pt-4">
                            <img src="/img/store.svg" alt="App Store" className="h-[40px]" />
                            <img src="/img/apple.svg" alt="Google Play" className="h-[40px]" />
                        </div>
                    </Activity>
                </div>
            </div>

            <div className="hidden text-sm leading-6 lg:container lg:mx-auto border-t border-[#EBEBEB] text-[#00000061] lg:block pt-6 pb-8 px-6">
                <p>{t('copyright')}</p>
            </div>
        </footer>
    );
}

export default Footer;
