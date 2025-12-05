"use client"
import {menuList} from "@/const/index.const";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {IMenuItems} from "@/types";

interface Props {
    onClick?: () => void,
    list?:IMenuItems[]
}

function Nav({list=menuList, ...props}: Props) {
    const [fullUrl, setFullUrl] = useState("");
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        setFullUrl(window.location.hash);
    }, [pathname]);


    return (
        <>
            {list?.map((link, index) => {
                const isActive = fullUrl === link.path;
                return (
                    <li key={index}>
                        <Link
                            onClick={() => {
                                router.push(`/${link.path}`)
                                setFullUrl(`${link.path}`)
                                props.onClick && props.onClick()
                            }}
                            href={`/${link.path}`}
                            className={
                                isActive
                                    ? "text-[#0F820F] font-semibold"
                                    : "text-black hover:text-[#0F820F] transition-colors"
                            }
                        >
                            {link.name}
                        </Link>
                    </li>
                );
            })}
        </>
    )
}

export default Nav
