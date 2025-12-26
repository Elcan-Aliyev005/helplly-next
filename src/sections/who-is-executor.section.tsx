import { IImageSection } from "@/types";
import SectionName from "@/components/ui/text/section-name.text";
import {getTranslations} from 'next-intl/server';

async function WhoIsExecutorSection({data}: {data: IImageSection[]}) {
    const t = await getTranslations('WhoIsExecutorSection');
    
    return (
      <section     id={'business'} className={'container px-4 scroll-mt-[150px] mx-auto'}>
          <div className={'bg-[url("/img/who-is-executor-banner-mobile.svg")] mb-10  lg:mb-21  lg:bg-[url("/img/who-is-executor-banner.svg")] bg-cover bg-center ' +
              ' h-full w-full block lg:flex justify-between ' +
              'rounded-[8px] lg:rounded-[16px] overflow-hidden ' +
              'min-h-[245px] lg:min-h-[520px] xl:h-[600px]'}>

              <div className="right text-[#fff] lg:w-[600px] xl:w-[653px]
             pt-6 px-3 lg:!p-[52px]
             lg:px-0  font-manrope ">
                  <SectionName circleClassName={"!bg-[#FFFFFF99]"} className={'!text-[#fff] mb-2'}>{t('title')}</SectionName>
                  <div  className={'text-[16px] lg:text-[45px]  lg:leading-[52px] lg:font-bold mb-2 lg:mb-3 leading-6 font-semibold max-w-[152px] lg:max-w-[450px]'} dangerouslySetInnerHTML={{__html: data.at(0)?.title ?? ''}} />
                  <div className={'leading-4 text-[10px] lg:leading-6 lg:text-[16px] text-[#FFFFFF99] max-w-[177px] lg:max-w-[553px]'} dangerouslySetInnerHTML={{__html: data.at(0)?.description ?? ''}} />
                  {/* Fərqli bacarıqlara sahib istifadəçilər işlərdən öz bacarıqlarına uyğun olanları seçib yerinə yetirir, müxtəlif təcrübəsi olan icraçılar vaxtına və imkanına uyğun işləri qəbul edir, əlavə gəlir axtaranlar isə qısa işləri tamamlayaraq ödəniş alırlar.   </p> */}

              </div>
          </div>
      </section>
    )
}

export default WhoIsExecutorSection
