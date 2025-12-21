"use client"
import {useEffect} from "react";
import {usePathname} from "@/i18n/navigation";

export function HashScrollClient() {
    const pathname = usePathname();

    useEffect(() => {
        if (window.location.hash) {
            const hash = window.location.hash;
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
        
        const scrollToHash = sessionStorage.getItem('scrollToHash');
        if (scrollToHash && pathname === '/') {
            sessionStorage.removeItem('scrollToHash');
            setTimeout(() => {
                const element = document.querySelector(scrollToHash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        }
    }, [pathname]);

    return null;
}

