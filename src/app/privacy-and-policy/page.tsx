"use client"
import {useEffect} from "react";
import Link from "next/link";


function PrivacyPage() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);
    return (
        <div className={'min-h-[70vh] px-4'}>

            <div className={'bg-[#E7F3E7] rounded-[12px] px-4 md:px-6 py-8'}>
                <Link className={'inline-block mb-3'} href={"/"}>
                    <div className={'flex items-center gap-1 '}>
                        <img src={'icons/left-arrow.png'} alt={'left-arrow'}/>
                        <span className={'leading-4 inline-block text-[18px] font-semibold text-[#158B15] '}>Geri</span>
                    </div>
                </Link>

                <h2 className={"text-[28px] md:text-[32px] mb-1 font-semibold leading-10"}>Privacy Policy</h2>
                <p className={'leading-4 text-xs text-[#21212161]'}>Last updated: November  2025</p>
            </div>


            <div className={'py-13 flex flex-col gap-10'}>
                <p className={'leading-6 text-sm  lg:w-2/3 text-[#212121E3]'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut nibh eu lorem rutrum luctus ut ut mi. Nam id pulvinar lorem. Nam in
                    lectus vitae nulla maximus hendrerit. Integer congue mollis porta. </p>

                <div>
                    <h4 className={'leading-6 mb-1 text-[16px] font-semibold'}>Lorem ipsum dolor sit amet</h4>
                    <p className={'leading-6 text-sm  lg:w-2/3 mb-8 text-[#212121E3]'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut nibh eu lorem rutrum luctus ut ut mi. Nam id pulvinar lorem. Nam in
                        lectus vitae nulla maximus hendrerit. Integer congue mollis porta. </p>
                    <ul className={'leading-6 list-[disc] pl-6 text-sm  lg:w-2/3 mb-8 text-[#212121E3]'}>
                        <li>Lorem ipsum dolor sit amet,</li>
                        <li> consectetur adipiscing elit. </li>
                        <li>Mauris ut nibh eu lorem rutrum luctus ut ut mi.</li>
                        <li>
                            Nam id pulvinar lorem. Nam in lectus vitae nulla maximus hendrerit. Integer congue mollis porta.
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default PrivacyPage