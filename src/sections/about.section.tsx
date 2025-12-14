import SectionTitle from "@/components/ui/text/section-title.text";
import SectionSubTitle from "@/components/ui/text/section-name.text";
import {nanoid} from "nanoid";
import {statisticsData} from "@/const/index.const";

function AboutSection() {
    return (
        // <section id={'about'} className={"pb-[25px] scroll-mt-[120px]  pt-[20px]"}>
        <section id={'about'} className={"pb-[40px] scroll-mt-[120px] lg:pb-[100px]  lg:pt-[60px] pt-[20px]"}>
            <div className={'flex flex-col xl:gap-[128px] xl:flex-row items-start justify-between'}>
                <div>
                    <SectionSubTitle>
                        Haqqımızda
                    </SectionSubTitle>
                </div>
                <div className={'mt-2  lg:max-w-[1062px]'}>
                    <h3 className={'leading-6 text-[#212121] text-[16px] lg:text-[24px] lg:leading-8 font-medium'}>
                       <span className={'font-bold'}>Helplly</span> - insanların vaxt tapmadığı və ya özləri yerinə yetirə bilmədiyi gündəlik işləri paylaşa bilməsi üçün yaradılmış sadə platformadır. Müxtəlif ünvanlardan əşya götürülməsi, çatdırılma, kiçik tapşırıqlar və ev işləri asanlıqla paylaşılır. Platforma işi icra etmək istəyən şəxslərlə sürətli və rahat əlaqə qurmağa imkan verir.
                    </h3>
                    <div className={'grid grid-cols-3 mt-6 lg:gap-[62px] lg:mt-[52px]'}>
                        {statisticsData.map((item) => (
                            <div
                                key={item.id}
                                className={'px-2 lg:px-3 border-l border-[#C7C7C7]'}
                            >
                                <h4
                                    className={
                                        'text-[19px] lg:leading-9 lg:text-[29px] leading-6 text-[#108910] mb-1 font-semibold'
                                    }
                                >
                                    {item.value}
                                </h4>
                                <p className={'text-xs  leading-4 text-[#21212199]'}>
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutSection
