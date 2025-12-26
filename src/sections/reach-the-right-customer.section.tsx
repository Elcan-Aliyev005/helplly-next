import TitleBadge from "@/components/ui/badge/title.badge";
import SectionTitle from "@/components/ui/text/section-title.text";
import {reachTheRightCustomerData} from "@/const/index.const";
import ReachTheRightCustomerCard from "@/components/ui/cards/reach-the-right-customer-card";
import SectionName from "@/components/ui/text/section-name.text";
import { IIconSection } from "@/types";
import {getTranslations} from 'next-intl/server';

async function ReachTheRightCustomerSection({data}: {data: IIconSection[]}) {
    const t = await getTranslations('ReachTheRightCustomerSection');
    
    return (
       <section className={'mx-auto container'}>
           <div
               id={'business'}
               className={"pb-[15px] scroll-mt-[100px] lg:pb-[75px] pt-[25px]"}>
               <div className={'section-header text-center'}>
                   <SectionName  className={'mb-2 justify-center'}>{t('subtitle')}</SectionName>
                   <SectionTitle className={'mt-0 px-3'}>
                       {t('title')}
                   </SectionTitle>
               </div>
               <div className={"reach-the-right-customer-cards mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-5 xl:grid-cols-4 lg:mt-[36px] "}>
                   {data.map((item, index) => {
                       return (
                           <ReachTheRightCustomerCard key={index} {...item} />
                       )
                   })}
               </div>
           </div>
       </section>
    )
}

export default ReachTheRightCustomerSection
