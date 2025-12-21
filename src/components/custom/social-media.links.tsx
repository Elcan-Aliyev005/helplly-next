import React from 'react'
import Link from "next/link";

function SocialMediaLinks() {
    return (
        <div className={'flex gap-[14px] items-center'}>
            <Link  target={'_blank'} href={'https://www.instagram.com/'}>
                <img src={'/icons/instagram.svg'} alt={'instagram'}/>
            </Link>
            <Link target={'_blank'} href={'/'}>
                <img src={'/icons/linkedin.svg'} alt={'linkedin'}/>
            </Link>
            <Link target={'_blank'} href={'/'}>
                <img src={'/icons/facebook.svg'} alt={'facebook'}/>
            </Link>

        </div>
    )
}

export default SocialMediaLinks
