"use client"
import {menuList} from "@/const/index.const";
import {Link, usePathname, useRouter} from "@/i18n/navigation";
import {useEffect, useState} from "react";
import {IMenuItems} from "@/types";
import {useTranslations} from 'next-intl';

interface Props {
    onClick?: () => void,
    list?:IMenuItems[]
}

function Nav({list=menuList, ...props}: Props) {
    const [fullUrl, setFullUrl] = useState("");
    const pathname = usePathname()
    const router = useRouter()
    const t = useTranslations('Nav');

    useEffect(() => {
        setFullUrl(window.location.hash);
    }, [pathname]);

    const getTranslationKey = (path: string) => {
        const keyMap: Record<string, string> = {
            '#helplly': 'helplly',
            '#business': 'business',
            '#why-us': 'whyUs',
            '#faq': 'faq',
            '#contact': 'contact'
        };
        return keyMap[path] || path.replace('#', '');
    };

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, linkPath: string) => {
        if (pathname !== '/') {
            e.preventDefault();
            sessionStorage.setItem('scrollToHash', linkPath);
            router.push('/' + linkPath);
        } else {
            setFullUrl(linkPath);
        }
        props.onClick && props.onClick();
    };

    return (
        <>
            {list?.map((link, index) => {
                const isActive = fullUrl === link.path;
                const translationKey = getTranslationKey(link.path);
                const translatedName = t(translationKey) || link.name;
                
                return (
                    <li key={index}>
                        <Link
                            onClick={(e) => handleLinkClick(e, link.path)}
                            href={pathname === '/' ? link.path : '/' + link.path}
                            className={
                                isActive
                                    ? "text-[#0F820F] leading-[23px] text-[18px]  font-medium"
                                    : "text-black hover:text-[#0F820F] transition-colors"
                            }
                        >
                            {translatedName}
                        </Link>
                    </li>
                );
            })}
        </>
    )
}

export default Nav
