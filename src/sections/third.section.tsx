import SectionTitle from "@/components/ui/text/section-title.text";
import SectionName from "@/components/ui/text/section-name.text";
import {IDoubleImageSection} from "@/types";
import {getTranslations} from 'next-intl/server';

async function ThirdSection({data}: { data: IDoubleImageSection[] }) {
    const t = await getTranslations('ThirdSection');

    return (
        <section className={'mx-auto container'}>
            <div
                id={'third-section'}
                className={" mb-[40px] lg:mb-[100px]  lg:flex lg:items-center lg:justify-between lg:gap-16"}>
                <div className={'section-header md:max-w-2/3 lg:max-w-[464px]'}>
                    <SectionName className={'mb-2'}>{t('subtitle')}</SectionName>
                    <SectionTitle className={'mb-4'}>
                        {t('title')}
                    </SectionTitle>
                    <div className={'text-[#00000099] leading-5 lg:leading-6 text-sm lg:text-[16px] '}
                         dangerouslySetInnerHTML={{__html: data.at(0)?.description ?? ''}}/>
                    {/* <span className={'font-semibold text-[#212121]'}>Helplly</span>-də işi paylaşdıqdan sonra bir neçə icraçıdan istək alırsınız. Onların məlumatlarını və əvvəlki fəaliyyətini nəzərdən keçirərək uyğun olanı seçirsiniz.
                </p> */}

                    {/* <div className={'text-[#00000099] leading-5 lg:leading-6 text-sm lg:text-[16px] '}>
                    {t('description')}
                </div> */}
                </div>

                <div className={'items-center grid grid-cols-2 gap-4 mt-[20px] lg:shrink-0  xl:w-[752px]'}>
                    <div
                        className={'bg-[#F9F9F9] flex items-end justify-center  rounded-[22px] h-[172px] lg:h-[305px]'}>
                        <img className={'lg:hidden'} src={'/img/phone.svg'} alt={'phone'}/>
                        <img className={'hidden lg:inline-block'} src={'/img/phone-desktop.svg'} alt={'phone'}/>
                    </div>
                    <div
                        className={'bg-[#F9F9F9] flex items-center justify-center rounded-[22px] h-[172px] lg:h-[305px] '}>
                        <img className={'lg:hidden'} src={'/img/hand-shake.svg'} alt={'hand-shake'}/>
                        <img className={'hidden lg:inline-block'} src={'/img/hand-shake-desktop.svg'}
                             alt={'hand-shake'}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ThirdSection
