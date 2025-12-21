'use client';

import {Menu} from '@mantine/core';
import {useTransition} from 'react';
import {useParams, useRouter as useNextRouter} from 'next/navigation';
import {Locale, useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';

export default function LanguageSwitcherMenu({className}:{className:string}) {
    const router = useRouter();
    const nextRouter = useNextRouter();
    const pathname = usePathname();
    const params = useParams();
    const [_, startTransition] = useTransition();
    const locale = useLocale();
    const t = useTranslations('LanguageSwitcher');

    function changeLocale(nextLocale: Locale) {
        startTransition(() => {
            router.replace(
                // @ts-expect-error — pathname + params always match current route
                {pathname, params},
                {locale: nextLocale}
            );
            nextRouter.refresh();
        });
    }

    return (
        <Menu shadow="md" zIndex={3000} withinPortal>
            <Menu.Target>
                <div className={`${className} cursor-pointer  p-[1px]`}>
                    <div className={'rounded-full h-full text-sm md:text-[16px] w-full flex justify-center items-center border'}>
                        {String(locale).toUpperCase()}
                    </div>
                </div>
            </Menu.Target>

            <Menu.Dropdown className={"!px-2 translate-x-[-18px]  md:translate-x-[0px] !py-2"}>
                <Menu.Item className={`${locale=="az" ? "!text-[#108910]":""} !leading-6 !text-[16px]`} onClick={() => changeLocale('az')}>{t('az')}</Menu.Item>
                <Menu.Item  className={`${locale=="en" ? "!text-[#108910]":""} !leading-6 !text-[16px]`} onClick={() => changeLocale('en')}>{t('en')}</Menu.Item>
                <Menu.Item className={`${locale=="ru" ? "!text-[#108910]":""} !leading-6 !text-[16px]`} onClick={() => changeLocale('ru')}>{t('ru')}</Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}
