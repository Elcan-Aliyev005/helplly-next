import TitleBadge from "@/components/ui/badge/title.badge";
import SectionTitle from "@/components/ui/text/section-title.text";
import SectionSubTitle from "@/components/ui/text/section-subtitle.text";
import {servicesData} from "@/const/index.const";

function SixthSection() {
    return (
        <section
            id={'how-does-it-work'}
            className={" pb-[15px] lg:pb-[75px] pt-[25px]"}>
            <div className={'section-header text-center'}>
                <TitleBadge title={'Tətbiqdəki rolunuzu müəyyən edin'}/>
                <SectionTitle className={'mt-3 px-3'}>
                    Lorem Ipsum is simply dummy
                </SectionTitle>
                <SectionSubTitle className={'mt-2'}>
                    Vaxtınızı xərcləmədən ən uyğun xidməti seçin – mövcud variantları müqayisə edin və sürətlə  peşəkarlarla əlaqə qurun.
                </SectionSubTitle>
            </div>
            <div className={"how-does-it-work-cards mt-[24px] lg:mt-[36px] grid grid-cols-1 items-start  md:grid-cols-2   gap-5"}>
                {servicesData.map((service,index)=>{
                    return(
                        <div key={index} className={'bg-[#F9F9F9] p-4 flex flex-col justify-between group rounded-[16px] border border-transparent transition-all duration-1000 hover:border-[#108910] hover:bg-[#1089100A] min-h-[196px] lg:min-h-[256px]'}>
                            <div className={'flex justify-end'}>
                                <div className={'icon-box group-hover:rotate-[360deg]  bg-[#212121] grid place-items-center transition-all duration-750  group-hover:bg-[#108910] w-12 h-12 rounded-full'}>
                                    <img src={'/icons/white-up-right.svg'} alt={'up-right-arrow'}/>
                                </div>
                            </div>
                            <div>
                                <h3 className={'text-[20px] mb-2 leading-6 lg:leading-8 lg:text-[24px] font-semibold'}>{service.title}</h3>
                                <p className={'text-sm leading-5  lg:w-1/2 text-[#212121AD]'}>{service.description}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default SixthSection
