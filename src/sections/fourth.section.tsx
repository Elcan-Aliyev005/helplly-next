import SectionTitle from "@/components/ui/text/section-title.text";
import {fourthSectionStepsData} from "@/const/index.const";
import FourthSectionStepCard from "@/components/ui/cards/fourth-section-step-card.card";
import SectionName from "@/components/ui/text/section-name.text";
import { ISection6, ISection6Content } from "@/types";
import {getTranslations} from 'next-intl/server';



async function FourthSection({data}: {data: ISection6[]}) {
    const t = await getTranslations('FourthSection');
    return (
        <section
            id={'fourth-section'}
            className={"mb-[40px] lg:mb-[100px]   text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 gap-6  lg:gap-20 "}>

            <div className={'rounded-[16px] flex justify-center lg:block lg:text-left  overflow-hidden'}>
                <img className={'sm:hidden w-full rounded-[16px]'} src={'/img/girl.svg'} alt={'girl'}/>
                <img className={'hidden sm:inline-block rounded-[16px]'} src={'/img/girl-desktop.svg'} alt={'girl'}/>
            </div>

            <div className={'section-header  text-left'}>
                <SectionName className={'mb-2'}>{t('title')}</SectionName>
                <SectionTitle className={'mb-2 text-[#1A1A1A]'}>
                        {data.at(0)?.title ?? ''}
                </SectionTitle>
                <div dangerouslySetInnerHTML={{__html: data.at(0)?.description ?? ''}} className={'text-[#000000AD]  leading-6 text-sm lg:text-[16px] '}/>
            
                <div className={'mt-6 grid grid-cols-1 gap-5'}>
                    {data.at(0)?.contents.map((item: ISection6Content, index: number)=>{
                        return(
                            <FourthSectionStepCard key={item.id} index={index} {...item}/>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default FourthSection
