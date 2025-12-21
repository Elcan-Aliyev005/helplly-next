import MoodboardSection from "@/sections/moodboard.section";
import HowDoesItWorkSection from "@/sections/how-does-it-work.section";
import ThirdSection from "@/sections/third.section";
import ReachTheRightCustomerSection from "@/sections/reach-the-right-customer.section";
import FourthSection from "@/sections/fourth.section";
import FifthSection from "@/sections/fifth.section";
import BusinessSection from "@/sections/business.section";
import FaqSection from "@/sections/faq.section";
import LastSection from "@/sections/last.section";
import AboutSection from "@/sections/about.section";
import WhoIsExecutorSection from "@/sections/who-is-executor.section";
import { initialHomePageData } from "@/const/index.const";
import { IHomePageData } from "@/types";
import { HashScrollClient } from "@/components/custom/hash-scroll.client";


export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;
export const fetchCache = 'force-no-store';
export const runtime = 'nodejs';

export default async function HomePage({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    
    let data: IHomePageData = initialHomePageData;
    
    try {
        const apiKey = process.env.NEXT_PUBLIC_API_KEY || process.env.API_KEY;
        const requestLang = locale || 'az';
        
        if (!apiKey) {
            return (
                <div className={'px-4'}>
                    <MoodboardSection data={initialHomePageData.sliders[0]}/>
                    <AboutSection data={initialHomePageData.about}/>
                    {await BusinessSection()}
                    <HowDoesItWorkSection data={initialHomePageData.sections1}/>
                    <FourthSection data={initialHomePageData.sections6}/>
                    {await ThirdSection({data: initialHomePageData.sections5})}
                    {await WhoIsExecutorSection({data: initialHomePageData.sections4})}
                    {await ReachTheRightCustomerSection({data: initialHomePageData.sections2})}
                    {await FifthSection({data: initialHomePageData.sections3})}
                    {await FaqSection({data: initialHomePageData.faqs})}
                    {await LastSection()}
                </div>
            );
        }

        const requestHeaders = {
            'lang': requestLang,
            'x-api-key': apiKey,
        };
        
        const timestamp = Date.now();
        const urlWithCacheBuster = `https://back.helplly.com/api/index?_t=${timestamp}&_locale=${requestLang}`;
        
        const res = await fetch(urlWithCacheBuster, {
            headers: requestHeaders,
            cache: 'no-store',
            next: { revalidate: 0 }
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.status}`);
        }

        const responseData = await res.json();
        data = responseData.data || initialHomePageData;
    } catch (error) {
       
    }
    
    return (
        <div className={'px-4'}>
            <HashScrollClient/>
            <MoodboardSection data={data?.sliders?.at(0) ?? {title: '', description: '', image: ''}}/>
            <AboutSection data={data?.about ?? {title:"",description:""}}/>
            {await BusinessSection()}
            <HowDoesItWorkSection data={data?.sections1 ?? []}/>
            <FourthSection data={data?.sections6 ?? []}/>
            {await ThirdSection({data: data?.sections5 ?? []})}
            {await WhoIsExecutorSection({data: data?.sections4 ?? []})}
            {await ReachTheRightCustomerSection({data: data?.sections2 ?? []})}
            {await FifthSection({data: data?.sections3 ?? []})}
            {await FaqSection({data: data.faqs})}
            {await LastSection()}
        </div>
    )
}
