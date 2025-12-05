import SectionTitle from "@/components/ui/text/section-title.text";
import {fourthSectionStepsData} from "@/const/index.const";
import FourthSectionStepCard from "@/components/ui/cards/fourth-section-step-card.card";


function FourthSection() {
    return (
        <section
            id={'fourth-section'}
            className={"pb-[15px] lg:pb-[80px] pt-[25px] text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 gap-6  lg:gap-20 "}>

            <div className={'rounded-[16px] flex justify-center lg:block lg:text-left  overflow-hidden'}>
                <img className={'sm:hidden rounded-[16px]'} src={'/img/girl.svg'} alt={'girl'}/>
                <img className={'hidden sm:inline-block rounded-[16px]'} src={'/img/girl-desktop.svg'} alt={'girl'}/>
            </div>

            <div className={'section-header  text-left'}>
                <SectionTitle className={'mb-2 text-[#1A1A1A]'}>
                    Lorem ipsum dolor sit amet
                </SectionTitle>
                <p className={'text-[#000000AD]  leading-6 text-sm lg:text-[16px] '}>
                    Xidmətlərinizi müştərilərə təqdim etmək  indi daha asandır!
                </p>

                <div className={'mt-6 grid grid-cols-1 gap-5'}>
                    {fourthSectionStepsData.map((item)=>{
                        return(
                            <FourthSectionStepCard key={item.id} {...item}/>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default FourthSection
