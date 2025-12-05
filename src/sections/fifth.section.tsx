import TitleBadge from "@/components/ui/badge/title.badge";
import SectionTitle from "@/components/ui/text/section-title.text";
import HowDoesItWorkCard from "@/components/ui/cards/how-does-it-work.card";
import {fifthSectionData} from "@/const/index.const";

function FifthSection() {
    return (
        <section
            id={'why-us'}
            className={"pb-[15px] scroll-mt-[100px] lg:pb-[75px] pt-[25px]"}>
            <div className={'section-header text-center'}>
                <TitleBadge title={'Niyə biz?'}/>
                <SectionTitle className={'mt-3 px-3'}>
                    Xidmət tapmaq asan olmamışdı
                </SectionTitle>
            </div>
            <div className={"how-does-it-work-cards mt-[24px] lg:mt-[36px] grid grid-cols-1 items-start  md:grid-cols-2  lg:grid-cols-3 gap-5"}>
                <div className={'grid grid-cols-1 gap-5'}>
                    {fifthSectionData.slice(0, 2).map((data, index) => {
                        return (
                            <HowDoesItWorkCard key={index} {...data} />
                        )
                    })}
                </div>
                <div className={'grid grid-cols-1 md:order-1 lg:order-0 gap-5'}>
                    <div className={"hidden lg:block"}>
                        <img className={'2xl:w-full 2xl:max-h-[347px] object-cover object-top rounded-[12px]'} src={'/img/men.svg'} alt={'men'}/>
                    </div>
                    {fifthSectionData.slice(2, 3).map((data, index) => {
                        return (
                            <HowDoesItWorkCard key={index} {...data} />
                        )
                    })}
                </div>
                <div className={'grid grid-cols-1 gap-5'}>
                    {fifthSectionData.slice(3, 5).map((data, index) => {
                        return (
                            <HowDoesItWorkCard key={index} {...data} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default FifthSection
