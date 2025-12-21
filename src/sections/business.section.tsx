import TitleBadge from "@/components/ui/badge/title.badge";
import SectionTitle from "@/components/ui/text/section-title.text";
import SectionSubTitle from "@/components/ui/text/section-subtitle.text";
import {servicesData} from "@/const/index.const";
import SectionName from "@/components/ui/text/section-name.text";
import {getTranslations} from 'next-intl/server';

async function BusinessSection() {
    const t = await getTranslations('BusinessSection');
    
    return (
        <section
            id={'how-does-it-work'}
            className={" pb-[40px] xl:pb-[100px] flex flex-col xl:justify-between xl:flex-row lg:gap-[20px]  xl:pt-[73px]"}>
            <div className={'section-header text-center pr-8 shrink-0 xl:max-w[413px] 2xl:max-w-[420px] xl:text-left'}>
                {/*<TitleBadge title={'Tətbiqdəki rolunuzu müəyyən edin'}/>*/}
                <SectionName className={'justify-center xl:justify-start'}>
                    {t('selectRole')}
                </SectionName>
                <SectionTitle className={'mt-2 xl:max-w-[400px] px-3 xl:pl-0'}>
                    {t('title')}
                </SectionTitle>
                <SectionSubTitle className={'!text-[13px] xl:ml-0 xl:max-w-[400px] xl:!text-[16px] xl:!leading-6 !leading-4 mt-2'}>
                    {t('subtitle')}
                </SectionSubTitle>
            </div>
            <div className={"how-does-it-work-cards mt-[24px] xl:mt-[0px] w-full  grid grid-cols-1 items-start  md:grid-cols-2    gap-5"}>
                <div className={'bg-[#F9F9F9] w-full p-4 flex flex-col justify-between group rounded-[16px] border border-transparent transition-all duration-1000 hover:border-[#108910] hover:bg-[#1089100A] min-h-[196px] lg:min-h-[256px]'}>
                    <div className={'flex justify-end'}>
                        <div className={'icon-box group-hover:rotate-[360deg]  bg-[#212121] grid place-items-center transition-all duration-750  group-hover:bg-[#108910] w-12 h-12 rounded-full'}>
                            <img src={'/icons/white-up-right.svg'} alt={'up-right-arrow'}/>
                        </div>
                    </div>
                    <div>
                        <h3 className={'text-[20px] mb-2 leading-6 xl:leading-8 xl:text-[24px] font-semibold'}>{t('services.executor.title')}</h3>
                        <p className={'text-sm leading-5  max-w-[280px] lg:max-w-[347px]    text-[#212121AD]'}>{t('services.executor.description')}</p>
                    </div>
                </div>
                <div className={'bg-[#F9F9F9] w-full p-4 flex flex-col justify-between group rounded-[16px] border border-transparent transition-all duration-1000 hover:border-[#108910] hover:bg-[#1089100A] min-h-[196px] lg:min-h-[256px]'}>
                    <div className={'flex justify-end'}>
                        <div className={'icon-box group-hover:rotate-[360deg]  bg-[#212121] grid place-items-center transition-all duration-750  group-hover:bg-[#108910] w-12 h-12 rounded-full'}>
                            <img src={'/icons/white-up-right.svg'} alt={'up-right-arrow'}/>
                        </div>
                    </div>
                    <div>
                        <h3 className={'text-[20px] mb-2 leading-6 xl:leading-8 xl:text-[24px] font-semibold'}>{t('services.serviceSeeker.title')}</h3>
                        <p className={'text-sm leading-5  max-w-[280px] lg:max-w-[347px]    text-[#212121AD]'}>{t('services.serviceSeeker.description')}</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default BusinessSection
