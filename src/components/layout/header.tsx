import {Button, Select} from "@mantine/core"
import {MobileSidebar} from "@/components/ui/sidebars/mobile.sidebar"
import {Link} from "@/i18n/navigation";
import Nav from "@/components/layout/nav";
import LanguageSwitcherMenu from "@/components/custom/language-switcher.menu";
import {getTranslations} from 'next-intl/server';

async function Header() {
    const t = await getTranslations('Header');
    
    return (
        <header className="py-7 fixed z-[999] w-full bg-[#fff]  font-manrope">

            <div className="container mx-auto flex items-center px-4 justify-between">
                <nav className="flex items-center gap-25">
                    <Link href={'/'}>
                        <img src="/img/mobile-logo.svg" alt="logo"/>
                    </Link>
                    <ul className="hidden lg:flex gap-10">
                        <Nav/>
                    </ul>
                </nav>
                <div className="hidden lg:flex items-center gap-[12px]">
                    <Button className="!rounded-full  hover:!bg-[#040404] hover:!text-[#fff] transition-all duration-400 !border-[#212121] !py-3 !h-[48px] !px-[50px]" variant="default">
                        <span className="font-normal text-[16px] leading-6">{t('download')}</span>
                    </Button>
                    <LanguageSwitcherMenu className={'w-[50px] h-[50px]'}/>

                </div>
                <MobileSidebar/>
            </div>


        </header>
    )
}

export default Header