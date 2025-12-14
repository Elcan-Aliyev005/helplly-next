"use client"
import {useDisclosure} from "@mantine/hooks";
import {Drawer} from "@mantine/core";
import Link from "next/link";
import Nav from "@/components/layout/nav";
import {usePathname} from "next/navigation";
import {menuList} from "@/const/index.const";
import SocialMediaLinks from "@/components/custom/social-media.links";

export function MobileSidebar() {
    const [opened, {open, close}] = useDisclosure(false);
const pathname= usePathname()
    return (
        <div className="lg:hidden">

            <Drawer
                offset={8}
                position="right"
                padding="md"
                radius={10}
                opened={opened}
                onClose={close}
                withCloseButton={false}
                withinPortal={true}
                zIndex={3000}
                overlayProps={{
                    zIndex: 2000,
                }}

                classNames={{
                    root:'!relative',
                    content: "!z-[3001]  !fixed !bottom-0 !left-0 !right-0",
                    body: "px-4  py-6 border-0",
                    header: "!p-0 !py-5 !px-4 !bg-[#108910]",
                    title:"w-full",
                }}

                title={<div className=" flex w-full justify-between items-center">
                    <div className={' w-[40px] h-[40px]'}>
                        <Link
                            href="/" onClick={close}>
                            <img src="/img/sidebar-logo.svg" className="outline-0" alt="logo"/>
                        </Link>
                    </div>
                    <div className={'w-[40px] h-[40px] grid place-items-center'}>
                        <button
                            onClick={close}
                            className="w-[30px] bg-[#0E7B0E] rounded-[5px] h-[30px] flex items-center justify-center hover:bg-white/20 transition"
                        >
                            <img src="/icons/close-icon.svg" alt="close" />
                        </button>
                    </div>
                </div>}
            >

               <div className={''}>
                   <ul className="space-y-4 text-[18px] pt-[32px] font-medium text-[#212121E3]">
                       <Nav list={menuList.slice(1)} onClick={close}/>
                       <li onClick={close}  className={`text-black hover:text-[#0F820F] transition-colors ${pathname == '/privacy-and-policy' && '!text-[#0F820F]' } cursor-pointer`}>
                           <Link href={'/privacy-and-policy'}>Privacy Policy</Link>
                       </li>
                       <li onClick={close} className={`text-black hover:text-[#0F820F] transition-colors ${pathname == '/terms-of-service' && '!text-[#0F820F]' } cursor-pointer`}>
                           <Link href={'/terms-of-service'}>Terms of Service</Link>
                       </li>
                   </ul>


                   <div className={'absolute py-[18px]  bottom-0'}>
                      <SocialMediaLinks/>
                   </div>


               </div>



            </Drawer>


            <div onClick={open}>
                <img src="/icons/menu-bars.svg" alt="menu-bar"/>
            </div>
        </div>
    );
}
