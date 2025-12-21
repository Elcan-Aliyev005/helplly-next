import TitleBadge from "@/components/ui/badge/title.badge";
import SectionTitle from "@/components/ui/text/section-title.text";
import HowDoesItWorkCard from "@/components/ui/cards/how-does-it-work.card";
import {fifthSectionData} from "@/const/index.const";
import SectionName from "@/components/ui/text/section-name.text";
import { ITextSection } from "@/types";
import {getTranslations} from 'next-intl/server';

async function FifthSection({data}: {data: ITextSection[]}) {
    const t = await getTranslations('FifthSection');
    
    return (
        <section
            id={'why-us'}
            className={"pb-[15px] scroll-mt-[100px] lg:pb-[75px] pt-[25px]"}>
            <div className={'section-header text-center'}>
               <SectionName className={'justify-center'}>{t('subtitle')}</SectionName>
                <SectionTitle className={'mt-3  px-3'}>
                    {t('title')}
                </SectionTitle>
            </div>
            <div className={"how-does-it-work-cards mt-[24px] lg:mt-[36px] grid grid-cols-1 items-start  md:grid-cols-2  lg:grid-cols-3 gap-5"}>
                <div className={'grid grid-cols-1 gap-5'}>
                    {data.slice(0, 2).map((item, index) => {
                        return (
                            <HowDoesItWorkCard key={index} {...item} />
                        )
                    })}
                </div>
                <div className={'grid grid-cols-1 md:order-1 lg:order-0 gap-5'}>
                    <div className={"hidden lg:block"}>
                        <img className={'2xl:w-full 2xl:max-h-[347px] object-cover object-top rounded-[12px]'} src={'/img/men.svg'} alt={'men'}/>
                    </div>
                    {data.slice(2, 3).map((item, index) => {
                        return (
                            <HowDoesItWorkCard key={index} {...item} />
                        )
                    })}
                </div>
                <div className={'grid grid-cols-1 gap-5'}>
                    {data.slice(3, 5).map((item, index) => {
                        return (
                            <HowDoesItWorkCard key={index} {...item} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default FifthSection
