
function MoodboardSection() {
    return (
            <section className={'bg-[#0D6E0D] mb-[25px] lg:bg-[#108910] lg:pt-3 lg:pl-[56px] lg:bg-[url("/img/grid-banner.png")] lg:bg-contain lg:bg-center h-full w-full block lg:flex justify-between items-center rounded-[24px] overflow-hidden min-h-[337px] lg:h-[600px] xl:h-[683px]'}>
            <div className="right text-[#fff] lg:w-[600px] xl:w-[653px]  py-[40px] lg:px-0 px-[16px] font-manrope ">
                <h3 className={'text-[32px] lg:text-[54px] lg:leading-15   xl:text-[68px] xl:leading-[75px] lg:font-bold  mb-3 font-semibold leading-[40px]'}>Evinizdən çıxmadan
                    xidmət tapın sadə,
                    sürətli, etibarlı!</h3>
                <p className={'text-[18px] mb-8 text-[#ffffffad] leading-6'}> Vaxtınızı xərcləmədən ən uyğun xidməti seçin
                    – mövcud variantları müqayisə edin
                    və sürətlə peşəkarlarla əlaqə qurun.</p>
                <a  href="#how-does-it-work" className="inline-block text-[16px] lg:text-lg lg:leading-7  leading-6 font-medium">
                   <div className={'flex items-center pr-1 border-b border-white gap-3'}>
                       İndi başlayın
                       <img src={'/icons/white-right-arrow.svg'} alt={'white-right-arrow'}/>
                   </div>
                </a>
            </div>
            <div className={'hidden w-[585px] h-full  lg:flex items-end'}>
                <img  src={"/img/app.svg"}/>
            </div>
        </section>
    )
}

export default MoodboardSection
