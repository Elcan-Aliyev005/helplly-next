import React from 'react'
import Link from "next/link";

function SocialMediaLinks() {
    return (
        <div className={'flex gap-[14px] items-center'}>
            <Link href={'https://www.instagram.com/'}>
                <img src={'/icons/instagram.svg'} alt={'instagram'}/>
            </Link>
            <Link href={'/'}>
                <img src={'/icons/linkedin.svg'} alt={'linkedin'}/>
            </Link>
            <Link href={'/'}>
                <img src={'/icons/facebook.svg'} alt={'facebook'}/>
            </Link>

        </div>
    )
}

export default SocialMediaLinks
