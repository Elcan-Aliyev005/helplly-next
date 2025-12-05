
function LastSection() {
    return (
        <section>
            <div className={'text-center'}>
                <img className={'inline-block lg:hidden'} src={'/img/logo_bg-mobile.svg'} alt={"logo-bg"}/>
                <img className={'hidden lg:inline-block'} src={'/img/logo_bg.svg'} alt={"logo-bg"}/>
            </div>
            <div
                className={' lg:pl-[63.5px] bg-[#108910] lg:bg-[url("/img/last-section-banner-bg.svg")] lg:bg-cover lg:bg-center lg:h-full lg:w-full lg:flex lg:items-center  relative rounded-[19px] text-[#fff] mt-[-43px] lg:translate-y-[-33%] p-4 sm :p-6 lg:p-4 lg:min-h-[500px]'}>
                <div className={'lg:w-5/9 2xl:w-6/9'}>
                    <h4 className={'leading-[16px] text-xs  lg:text-[16px] lg:leading-6 lg:mb-2 mb-1'}>Bizimlə əlaqə</h4>
                    <h3 className={'text-[32px] lg:text-[44px]  lg:leading-[52px]  lg:font-bold  mb-2 font-semibold leading-[40px]'}>Siz
                        də bizə
                        qoşulmaq istəyirsiniz?</h3>
                    <p className={'text-[14px] lg:pr-[80px] mb-8 text-[#ffffffad] leading-6'}> Cras tellus erat, gravida
                        non ultricies sit amet, consequat vel enim. Nunc ac diam nibh.
                        Donec commodo lobortis sollicitudin. Donec ultricies, orci sed maximus elementum, </p>

                    <div className={'flex items-center pb-[14px] gap-[8px]'}>
                        <img src={'/img/store.svg'} alt={"store"}/>
                        <img src={'/img/apple.svg'} alt={"apple"}/>

                    </div>
                </div>
                <div className={'absolute bottom-0 right-0 w-[540px] xl:w-[650px]'}>
                    <img className={'hidden lg:inline-block'} src={'/img/girl-phone2.png'} alt={"logo-bg"}/>
                </div>
            </div>
        </section>
    )
}

export default LastSection
