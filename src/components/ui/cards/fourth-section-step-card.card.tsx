
interface  Props{
    title:string,
    description:string
    id:number
}
function FourthSectionStepCard({title, description, id}:Props) {
    return (
        <div className={'gap-3  flex items-center '}>

            <div className={'mb-4'}>
                <div className={'icon-box inline-flex text-[18px] font-bold leading-6 items-center justify-center rounded-full  w-[40px] h-[40px] bg-[#F9F9F9] p-[6px]'}>
                    {id}
                </div>
            </div>
           <div>
               <h3 className={' text-[16px] lg:text-[19px]   mb-1  2xl:w-4/5 text-[#1A1A1A] font-semibold leading-6'}>{title}</h3>
               <p className={'text-[#1A1A1AAD] leading-6  text-sm lg:w-4/5 '}>{description}</p>
           </div>

        </div>
    )
}

export default FourthSectionStepCard
