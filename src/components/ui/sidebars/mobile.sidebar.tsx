"use client"
import {useDisclosure} from "@mantine/hooks";
import {Drawer} from "@mantine/core";
import Link from "next/link";
import Nav from "@/components/layout/nav";
import {usePathname} from "next/navigation";
import {menuList} from "@/const/index.const";

export function MobileSidebar() {
    const [opened, {open, close}] = useDisclosure(false);
const pathname= usePathname()
    return (
        <div className="lg:hidden">

            <Drawer
                offset={8}
                position="bottom"
                padding="md"
                radius={10}
                size="sm"
                opened={opened}
                lockScroll={false}
                onClose={close}

                withinPortal={true}
                zIndex={3000}
                overlayProps={{
                    zIndex: 2000,
                }}

                classNames={{
                    content: "!z-[3001] !fixed !bottom-0 !left-0 !right-0",
                    body: "px-5 py-6",
                    header: "!pt-4 !pb-3",
                }}

                title={<div className=" py-2 flex justify-between items-center">
                    <Link
                        href="/" onClick={close}>
                        <img src="/img/mobile-logo.svg" className="h-[30px]" alt="logo"/>
                    </Link>
                </div>}
            >

                <ul className="space-y-4 text-[18px] font-medium text-[#212121E3]">
                   <Nav list={menuList.slice(1)} onClick={close}/>
                    <li onClick={close}  className={`text-black hover:text-[#0F820F] transition-colors ${pathname == '/privacy-and-policy' && '!text-[#0F820F]' } cursor-pointer`}>
                        <Link href={'/privacy-and-policy'}>Privacy Policy</Link>
                    </li>
                    <li onClick={close} className={`text-black hover:text-[#0F820F] transition-colors ${pathname == '/terms-of-service' && '!text-[#0F820F]' } cursor-pointer`}>
                        <Link href={'/terms-of-service'}>Terms of Service</Link>
                    </li>
                </ul>


            </Drawer>


            <div onClick={open}>
                <img src="/icons/menu-bars.svg" alt="menu-bar"/>
            </div>
        </div>
    );
}
