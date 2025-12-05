import {FaqAccordion} from "@/components/ui/accordions/faq.accordion";
import SectionTitle from "@/components/ui/text/section-title.text";

function FaqSection() {
    return (
        <section id={'faq'} className={"pb-[25px] scroll-mt-[120px] lg:pb-[100px] pt-[25px]"}>
            <SectionTitle className={'mb-8'}>
                Tez-Tez Verilən Suallar
            </SectionTitle>


            <div>
                <FaqAccordion/>
            </div>
        </section>
    )
}

export default FaqSection
