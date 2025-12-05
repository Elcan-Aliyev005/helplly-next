import SectionTitle from "@/components/ui/text/section-title.text";


function ThirdSection() {
    return (
        <section
            id={'third-section'}
            className={" pb-[15px]  pt-[25px]  lg:pb-[75px]  lg:pt-[95px] lg:flex lg:items-center lg:justify-between lg:gap-16"}>
            <div className={'section-header md:max-w-2/3 lg:max-w-[464px]'}>
                <SectionTitle className={'mb-4'}>
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </SectionTitle>
                <p className={'text-[#00000099] leading-5 lg:leading-6 text-sm lg:text-[16px] '}>
                    The "No tree cutting" programme is being realized at the joint intiative of Heydar Aliyev Foundation
                    and IDEA Public Union.realized at the joint intiative of Heydar Aliyev Foundation and IDEA Public
                    Union.
                </p>
            </div>

            <div className={'items-center grid grid-cols-2 gap-4 mt-[20px] lg:shrink-0  xl:w-[752px]'}>
                <div className={'bg-[#F9F9F9] flex items-end justify-center  rounded-[22px] h-[172px] lg:h-[305px]'}>
                    <img className={'lg:hidden'} src={'/img/phone.svg'} alt={'phone'}/>
                    <img className={'hidden lg:inline-block'} src={'/img/phone-desktop.svg'} alt={'phone'}/>
                </div>
                <div className={'bg-[#F9F9F9] flex items-center justify-center rounded-[22px] h-[172px] lg:h-[305px] '}>
                    <img className={'lg:hidden'} src={'/img/hand-shake.svg'} alt={'hand-shake'} />
                    <img className={'hidden lg:inline-block'} src={'/img/hand-shake-desktop.svg'} alt={'hand-shake'}/>
                </div>
            </div>
        </section>
    )
}

export default ThirdSection
