import TitleBadge from "@/components/ui/badge/title.badge";
import SectionTitle from "@/components/ui/text/section-title.text";
import HowDoesItWorkCard from "@/components/ui/cards/how-does-it-work.card";
import {howDoesItWorkData} from "@/const/index.const";
import SectionName from "@/components/ui/text/section-name.text";
import { ITextSection } from "@/types";

function HowDoesItWorkSection({data}: {data: ITextSection[]}) {
    return (
        <section
            id={'helplly'}
            className={"py-6  scroll-mt-[120px]  lg:py-8 mb-[40px] lg:mb-[100px]"}>
            <div className={'section-header text-center'}>
                <SectionName className={'justify-center'}>
                    Xidmət axtaranlar
                </SectionName>
                <SectionTitle className={'mt-3 px-3'}>
                    Xidmət axtaran
                    <br/>
                    istifadəçilər kimlərdir?
                </SectionTitle>
            </div>
            <div className={"how-does-it-work-cards mt-[24px] lg:mt-[36px] grid grid-col-1 lg:grid-cols-3 gap-5"}>
                {data.map((item, index) => {
                    return (
                        <HowDoesItWorkCard type={"with-bg-image"} index={index+1} key={index} {...item} />
                    )
                })}
            </div>
        </section>
    )
}

export default HowDoesItWorkSection
