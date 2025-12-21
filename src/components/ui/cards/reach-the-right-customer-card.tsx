interface  Props{
    title:string,
    description:string
    icon:string
}
function ReachTheRightCustomerCard({title, description, icon}:Props) {
    return (
        <div className={'border-[#EBEBEB] border rounded-[18px] px-[20px] lg:px-[24px] py-[24px]  lg:py-[32px]'}>

            <div className={'mb-4'}>
                <div  className={'icon-box inline-flex items-center justify-center rounded-[10px] bg-[#E7F3E7] p-[6px]'}>
                    <img src={icon} alt={'icon'} />
                </div>
            </div>
            <h3 className={' text-[16px] lg:text-[19px]   mb-2  2xl:w-4/5 text-[#1A1A1A] font-semibold leading-6'}>{title}</h3>
            <div className={'text-[#1A1A1AAD] leading-6 text-sm  lg:text-[16px]'} dangerouslySetInnerHTML={{__html: description}} />

        </div>
    )
}

export default ReachTheRightCustomerCard
