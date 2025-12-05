'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Activity} from "react";

function Footer() {
    const pathname = usePathname()
    return (
        <footer id={'contact'} className="mt-15 scroll-mt-[120px]    bg-[#F9F9F9]">
            <div className={"lg:flex lg:justify-between lg:container lg:mx-auto "}>
                <nav className="py-6 lg:px-6 lg:py-9 text-center lg:text-left ">
                    <Link className="inline-block" href="/">
                        <img src="/img/mobile-logo.svg" alt="logo"/>
                    </Link>
                    <p className="leading-4 text-xs md:text-sm md:leading-6 max-w-[293px] md:mt-[10px] mx-auto lg:mx-0 text-[#00000061]">
                        ondimentum faucibus erat. Nam et massa dapibus,
                        tincidunt metus se
                    </p>
                </nav>
                <div className="text-center lg:flex gap-15 text-sm lg:px-6 lg:py-9  text-[#00000099] space-y-7 pb-10">


                    <div className={' lg:text-left'}>
                        <h3 className="font-semibold text-[13px] leading-[20px]   lg:text-[16px] lg:leading-6 text-[#404145] mb-2">Company</h3>
                        <ul className="space-y-3 text-xs  lg:text-[16px] lg:leading-6 leading-[16px]">
                            <li className={'hover:text-[#0F820F] cursor-pointer'}>
                                <Link href={'/#why-us'}>Haqqımızda</Link>
                            </li>
                            <li className={'hover:text-[#0F820F] cursor-pointer'}>
                                <Link href={'/terms-of-service'}>
                                    İstifadəçi şərtləri
                                </Link>
                            </li>
                            <li className={'hover:text-[#0F820F] cursor-pointer'}>
                                <Link href={'/#contact'}>Bizimlə əlaqə</Link>
                            </li>
                            <li className={'hover:text-[#0F820F] cursor-pointer'}>
                                <Link href={'/#faq'}>Tez-tez verilən suallar</Link>
                            </li>
                        </ul>
                    </div>


                    <div className={'lg:text-left'}>
                        <h3 className="font-semibold text-[13px] leading-[20px]   lg:text-[16px] lg:leading-6 text-[#404145] mb-2">Contact
                            us</h3>
                        <ul className="space-y-3 text-xs  lg:text-[16px] lg:leading-6 leading-[16px]">
                            <li className={'hover:text-[#0F820F] cursor-pointer'}>
                                <Link href="tel:+994551111111">+994 (55) 111 11 11</Link>
                            </li>
                            <li className={'hover:text-[#0F820F] cursor-pointer'}>
                                <Link href="mailto:heplly@gmail.com" > heplly@gmail.com</Link></li>
                        </ul>
                    </div>


                    <div className={'lg:pr-6 lg:text-left'}>
                        <h3 className="font-semibold text-[13px] leading-[20px]   lg:text-[16px] lg:leading-6 text-[#404145] mb-2">Policies</h3>
                        <ul className="space-y-3 text-xs  lg:text-[16px] lg:leading-6 leading-[16px]">
                            <li className={'hover:text-[#0F820F] cursor-pointer'}>
                                <Link href={'/privacy-and-policy'}>Privacy Policy</Link>
                            </li>
                            <li className={'hover:text-[#0F820F] cursor-pointer'}>
                                <Link href={'/terms-of-service'}>Terms of Service</Link>
                            </li>
                        </ul>
                    </div>

                    <Activity mode={pathname == "/" ? 'hidden' : "visible"}>
                        <div className="flex lg:hidden justify-center gap-3 pt-4">
                            <img
                                src="/img/store.svg"
                                alt="App Store"
                                className="h-[40px]"
                            />
                            <img
                                src="/img/apple.svg"
                                alt="Google Play"
                                className="h-[40px]"
                            />
                        </div>
                    </Activity>
                </div>
            </div>
            <div
                className={"hidden text-sm leading-6 lg:container lg:mx-auto border-t border-[#EBEBEB] text-[#00000061] lg:block pt-6 pb-8 px-6"}>
                <p>© 2025 Lorem Ipsum is simply </p>
            </div>
        </footer>
    );
}

export default Footer;
