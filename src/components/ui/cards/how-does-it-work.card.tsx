interface Props {
    title: string,
    description: string
    index?: number,
    type?: 'with-bg-image' | 'with-bg-color'
}


function HowDoesItWorkCard({title, index, type = "with-bg-color", description}: Props) {

    const style = {
        backgroundImage: `url('/img/article-bg${index}.svg')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
    }


    if (type == "with-bg-image") {
        return (
            <div
                style={style}
                className={`rounded-[12px] cursor-cursor px-[20px] lg:px-[24px] py-[24px]  lg:py-[32px]`}>
                <h3 className={' text-[16px] lg:text-[19px] 2xl:pr-[33px]  mb-4 lg:mb-7 w-2/3 text-[#FFFFFF] font-semibold leading-6'}>{title}</h3>
                <p className={'text-[#FFFFFFBF] leading-6 text-sm lg:text-[16px]'}>{description}</p>
            </div>
        )
    }else {
        return (
            <div className={'bg-[#E7F3E7] rounded-[12px] px-[20px] lg:px-[24px] py-[24px]  lg:py-[32px]'}>
                <h3 className={'text-[16px] lg:text-[19px] 2xl:pr-[33px]  mb-4 lg:mb-6 w-2/3 text-[#212121DE] font-bold leading-6'}>{title}</h3>
                <p className={'text-[#00000099] leading-6 max-w-[362px] text-sm lg:text-[16px]'}>{description}</p>
            </div>
        )
    }
}

export default HowDoesItWorkCard
