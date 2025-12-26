import SectionTitle from "@/components/ui/text/section-title.text";
import SectionSubTitle from "@/components/ui/text/section-subtitle.text";
import {servicesData} from "@/const/index.const";
import SectionName from "@/components/ui/text/section-name.text";
import {getTranslations} from 'next-intl/server';

async function BusinessSection() {
    const t = await getTranslations('BusinessSection');
    return (
        <section className="container mx-auto px-4">
            <div
                id="how-does-it-work"
                className="pb-[40px] xl:pb-[100px] flex flex-col xl:justify-between xl:flex-row lg:gap-[20px] xl:pt-[73px]">
                <div className="section-header text-center pr-8 shrink-0 xl:max-w-[413px] 2xl:max-w-[420px] xl:text-left">
                    <SectionName className="justify-center xl:justify-start">
                        {t("selectRole")}
                    </SectionName>
                    <SectionTitle className="mt-2 xl:max-w-[400px] px-3 xl:pl-0">
                        {t("title")}
                    </SectionTitle>
                    <SectionSubTitle className="mt-2 !text-[13px] xl:!text-[16px] xl:!leading-6 !leading-4 xl:max-w-[400px]">
                        {t("subtitle")}
                    </SectionSubTitle>
                </div>
                <div className="how-does-it-work-cards mt-[24px] xl:mt-0 w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="business-card flex flex-col justify-between min-h-[196px] lg:min-h-[256px]">
                        <div className="flex justify-end">
                            <div className="business-card__icon">
                                <img src="/icons/white-up-right.svg" alt="up-right-arrow"/>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[20px] mb-2 leading-6 xl:leading-8 xl:text-[24px] font-semibold">{t("services.executor.title")}</h3>
                            <p className="text-sm leading-5 max-w-[347px] text-[#212121AD]">{t("services.executor.description")}</p>
                        </div>
                    </div>
                    <div className="business-card flex flex-col justify-between min-h-[196px] lg:min-h-[256px]">
                        <div className="flex justify-end">
                            <div className="business-card__icon">
                                <img src="/icons/white-up-right.svg" alt="up-right-arrow"/>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[20px] mb-2 leading-6 xl:leading-8 xl:text-[24px] font-semibold">
                                {t("services.serviceSeeker.title")}
                            </h3>
                            <p className="text-sm leading-5 max-w-[347px] text-[#212121AD]">
                                {t("services.serviceSeeker.description")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default BusinessSection;
