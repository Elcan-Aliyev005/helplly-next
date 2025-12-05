interface  Props{
    title:string,
    description:string
}
function HowDoesItWorkCard({title, description}:Props) {
    return (
        <div className={'bg-[#E7F3E7] rounded-[12px] px-[20px] lg:px-[24px] py-[24px]  lg:py-[32px]'}>

            <h3 className={' text-[16px] lg:text-[19px] 2xl:pr-[33px]  mb-4 lg:mb-7 w-2/3 text-[#212121DE] font-semibold leading-6'}>{title}</h3>
            <p className={'text-[#00000099] leading-6 text-sm lg:text-[16px]'}>{description}</p>

        </div>
    )
}

export default HowDoesItWorkCard
