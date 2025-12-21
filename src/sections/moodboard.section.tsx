import Link from "next/link";

function MoodboardSection({data}:{data:{title:string, description:string,image:string}}) {
    return (
            <section className={'bg-[url("/img/new-green-banner-mobile.svg")]    lg:pl-[56px] lg:bg-[url("/img/new-green-banner.svg")] bg-cover lg:bg-center  w-full block flex justify-between items-center rounded-[24px] overflow-hidden min-h-[337px] lg:h-[600px] xl:h-[683px]'}>
            <div className="right flex flex-col justify-center items-start lg:block text-[#fff] lg:w-[600px] xl:w-[653px] min-h-[337px] lg:!min-h-[auto] py-[36px] lg:px-0 pl-[12px] pr-[9px] font-manrope ">
                <h3 className={'text-[32px] lg:text-[54px] lg:leading-15    xl:text-[68px] xl:leading-[75px]   mb-2 font-semibold lg:font-bold leading-[40px]'}>
                    {data.title}

                    {/*Helplly ilə bir*/}
                    {/*<br/>*/}
                    {/*klikdə işini həll et!*/}
                </h3>
                <div className={'text-[14px] lg:text-[16px] mb-5   text-[#ffffffad] max-w-[307px] lg:!max-w-[552px] leading-6'} dangerouslySetInnerHTML={{__html:data.description || ' '}}/>
                    {/*Elanı yerləşdirin, qiymət və məlumat göndərən şəxsləri müqayisə edin və*/}
                    {/*sizin üçün ən uyğun olanı seçin.</p>*/}
                <Link  href="#how-does-it-work" className="block  text-[16px] lg:text-lg lg:leading-7  leading-6 font-medium">
                   <span className={'inline-flex items-center pr-1 border-b border-white gap-3'}>
                       İndi başlayın
                       <img src={'/icons/white-right-arrow.svg'} alt={'white-right-arrow'}/>
                   </span>
                </Link>
            </div>
            <div className={'hidden w-[585px] h-full  lg:flex items-end'}>
                <img  src={data.image || "/img/app.svg" } alt={'app'}/>
            </div>
        </section>
    )
}

export default MoodboardSection
