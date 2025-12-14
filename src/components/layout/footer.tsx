'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity } from "react";
import {footerData} from "@/const/index.const";

function Footer() {
    const pathname = usePathname();

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

                    <p className="leading-4 text-xs md:text-sm md:leading-6 max-w-[293px] md:mt-[10px] mx-auto lg:mx-0 text-[#00000061]">
                        {footerData.description}
                    </p>
                </nav>

                {/* Sections */}
                <div className="text-center lg:flex gap-15 text-sm lg:px-6 lg:py-9 text-[#00000099] space-y-7 pb-10">
                    {footerData.sections.map((section, index) => (
                        <div key={index} className="lg:text-left lg:pr-6">
                            <h3 className="font-semibold text-[13px] leading-[20px] lg:text-[16px] lg:leading-6 text-[#404145] mb-2">
                                {section.title}
                            </h3>

                            <ul className="space-y-3 text-xs lg:text-[16px] lg:leading-6 leading-[16px]">
                                {section.links.map((link, i) => (
                                    <li
                                        key={i}
                                        className="hover:text-[#0F820F] cursor-pointer"
                                    >
                                        <Link href={link.href}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Mobile App Links */}
                    <Activity mode={pathname === "/" ? "hidden" : "visible"}>
                        <div className="flex lg:hidden justify-center gap-3 pt-4">
                            <img src="/img/store.svg" alt="App Store" className="h-[40px]" />
                            <img src="/img/apple.svg" alt="Google Play" className="h-[40px]" />
                        </div>
                    </Activity>
                </div>
            </div>

            {/* Bottom */}
            <div className="hidden text-sm leading-6 lg:container lg:mx-auto border-t border-[#EBEBEB] text-[#00000061] lg:block pt-6 pb-8 px-6">
                <p>{footerData.copyright}</p>
            </div>
        </footer>
    );
}

export default Footer;
