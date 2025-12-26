import TitleBadge from "@/components/ui/badge/title.badge";
import SectionTitle from "@/components/ui/text/section-title.text";
import HowDoesItWorkCard from "@/components/ui/cards/how-does-it-work.card";
import {howDoesItWorkData} from "@/const/index.const";
import {getTranslations} from 'next-intl/server';

import {ITextSection} from "@/types";

async function HowDoesItWorkSection({data}: { data: ITextSection[] }) {
    const t = await getTranslations('HowDoesItWorkSection');

    return (
        <section
            className={"py-6  bg-[#F9F9F9] scroll-mt-[120px]  lg:py-8 mb-[40px] lg:mb-[100px]"}>
            <div className={'container px-4 mx-auto'}>
                <div className={'section-header text-center'}>

                    <SectionTitle className={' px-3'}>
                        {t('titlePart1')}
                        <br/>
                        {t('titlePart2')}
                    </SectionTitle>
                </div>
                <div className={"how-does-it-work-cards mt-[24px] lg:mt-[36px] grid grid-col-1 lg:grid-cols-3 gap-5"}>
                    {data.map((item, index) => {
                        return (
                            <HowDoesItWorkCard type={"with-bg-image"} index={index + 1} key={index} {...item} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default HowDoesItWorkSection
