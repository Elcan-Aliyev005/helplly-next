import TitleBadge from "@/components/ui/badge/title.badge";
import SectionTitle from "@/components/ui/text/section-title.text";
import HowDoesItWorkCard from "@/components/ui/cards/how-does-it-work.card";
import {howDoesItWorkData} from "@/const/index.const";

function HowDoesItWorkSection() {
    return (
        <section
            id={'helplly'}
            className={"pb-[39px] scroll-mt-[120px] pt-[11px] lg:py-[25px]"}>
            <div className={'section-header text-center'}>
                <TitleBadge title={'Necə işləyir?'}/>
                <SectionTitle className={'mt-3 px-3'}>
                    Xidmət tapmaq bu qədər asan olmamışdı - <br/>
                    ehtiyacınızı qeyd edin, qalanını yaxın icraçılar həll etsin.
                </SectionTitle>
            </div>
            <div className={"how-does-it-work-cards mt-[24px] lg:mt-[36px] lg:flex-row flex flex-col gap-5"}>
                {howDoesItWorkData.map((data, index) => {
                    return (
                        <HowDoesItWorkCard key={index} {...data} />
                    )
                })}
            </div>
        </section>
    )
}

export default HowDoesItWorkSection
