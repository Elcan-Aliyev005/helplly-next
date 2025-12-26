"use client";

import { menuList } from "@/const/index.const";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { IMenuItems } from "@/types";

interface Props {
    onClick?: () => void;
    list?: IMenuItems[];
}

function Nav({ list = menuList, onClick }: Props) {
    const pathname = usePathname();
    const router = useRouter();
    const t = useTranslations("Nav");

    const [activeHash, setActiveHash] = useState("");

    useEffect(() => {
        const updateHash = () => {
            setActiveHash(window.location.hash);
        };
        updateHash();
        const interval = setInterval(updateHash, 100);
        return () => clearInterval(interval);
    }, []);

    const getTranslationKey = (path: string) => {
        const map: Record<string, string> = {
            "#about": "helplly",
            "#business": "business",
            "#why-us": "whyUs",
            "#faq": "faq",
            "#contact": "contact",
        };
        return map[path];
    };

    const handleClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        hash: string
    ) => {
        if (pathname !== "/") {
            e.preventDefault();
            router.push("/" + hash);
        }

        setActiveHash(hash);
        onClick?.();
    };

    return (
        <>
            {list.map((link, index) => {
                const isActive = activeHash === link.path;

                return (
                    <li key={index}>
                        <Link
                            href={pathname === "/" ? link.path : "/" + link.path}
                            onClick={(e) => handleClick(e, link.path)}
                            className={
                                isActive
                                    ? "text-[#0F820F] text-[18px] font-medium"
                                    : "text-black hover:text-[#0F820F]"
                            }
                        >
                            {t(getTranslationKey(link.path))}
                        </Link>
                    </li>
                );
            })}
        </>
    );
}

export default Nav;
