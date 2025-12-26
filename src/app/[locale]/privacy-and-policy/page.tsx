import {Link} from "@/i18n/navigation";
import {getTranslations} from 'next-intl/server';
import {ScrollToTopClient} from "@/components/custom/scroll-to-top.client";

export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;
export const fetchCache = 'force-no-store';
export const runtime = 'nodejs';

async function PrivacyPage({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    const t = await getTranslations('Nav');
    
    let pageData = {
        title: t('privacyPolicy'),
        content: ''
    };

    try {
        const apiKey = process.env.NEXT_PUBLIC_API_KEY || process.env.API_KEY;
        const requestLang = locale || 'az';
        
        if (apiKey) {
            const requestHeaders = {
                'lang': requestLang,
                'x-api-key': apiKey,
            };
            
            const timestamp = Date.now();
            const urlWithCacheBuster = `https://back.helplly.com/api/content-page?type=policy&_t=${timestamp}&_locale=${requestLang}`;
            
            const res = await fetch(urlWithCacheBuster, {
                headers: requestHeaders,
                cache: 'no-store',
                next: { revalidate: 0 }
            });

            if (res.ok) {
                const responseData = await res.json();
                if (responseData.status && responseData.data) {
                    pageData = {
                        title: responseData.data.title || pageData.title,
                        content: responseData.data.content || ''
                    };
                }
            }
        }
    } catch (error) {
        console.error('Error fetching privacy policy:', error);
    }

    return (
        <div className={'min-h-[70vh] container mx-auto px-4'}>
            <ScrollToTopClient/>
            <div className={'bg-[#E7F3E7] rounded-[12px] px-4 md:px-6 py-8'}>
                <Link className={'inline-block mb-3'} href={"/"}>
                    <div className={'flex items-center gap-1 '}>
                        <img src={'/icons/left-arrow.png'} alt={'left-arrow'}/>
                        <span className={'leading-4 inline-block text-[18px] font-semibold text-[#158B15] '}>{t('back')}</span>
                    </div>
                </Link>

                <h2 className={"text-[28px] md:text-[32px] mb-1 font-semibold leading-10"}>{pageData.title}</h2>
                <p className={'leading-4 text-xs text-[#21212161]'}>{t('lastUpdated')}</p>
            </div>

            {pageData.content && (
                <div className={'py-13 flex flex-col gap-10'}>
                    <div 
                        className={'leading-6 text-sm lg:w-2/3 text-[#212121E3] prose prose-sm max-w-none'}
                        dangerouslySetInnerHTML={{ __html: pageData.content }}
                    />
                </div>
            )}

        </div>
    )
}

export default PrivacyPage