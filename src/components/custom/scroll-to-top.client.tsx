"use client"
import {useEffect} from "react";

export function ScrollToTopClient() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    return null;
}

