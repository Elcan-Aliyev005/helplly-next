import {FaqAccordion} from "@/components/ui/accordions/faq.accordion";
import SectionTitle from "@/components/ui/text/section-title.text";
import {IFaq} from "@/types";
import {getTranslations} from 'next-intl/server';

async function FaqSection({data}:{data:IFaq[]}) {
    const t = await getTranslations('FaqSection');
    
    return (
        <section className={'mx-auto container'}>
            <div id={'faq'} className={"pb-[25px] scroll-mt-[120px] lg:pb-[100px] pt-[25px]"}>
                <SectionTitle className={'mb-8'}>
                    {t('title')}
                </SectionTitle>


                <div>
                    <FaqAccordion data={data}/>
                </div>
            </div>
        </section>
    )
}

export default FaqSection
