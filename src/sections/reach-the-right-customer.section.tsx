import TitleBadge from "@/components/ui/badge/title.badge";
import SectionTitle from "@/components/ui/text/section-title.text";
import {reachTheRightCustomerData} from "@/const/index.const";
import ReachTheRightCustomerCard from "@/components/ui/cards/reach-the-right-customer-card";
import SectionName from "@/components/ui/text/section-name.text";

function ReachTheRightCustomerSection() {
    return (
        <section
            id={'business'}
            className={"pb-[15px] scroll-mt-[100px] lg:pb-[75px] pt-[25px]"}>
            <div className={'section-header text-center'}>
                <SectionName  className={'mb-2 justify-center'}>Necə başlamalı?</SectionName>
                <SectionTitle className={'mt-0 px-3'}>
                    Sizin üçün uyğun işi necə tapmaq olar?
                </SectionTitle>
            </div>
            <div className={"reach-the-right-customer-cards mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-5 xl:grid-cols-4 lg:mt-[36px] "}>
                {reachTheRightCustomerData.map((data, index) => {
                    return (
                        <ReachTheRightCustomerCard key={index} {...data} />
                    )
                })}
            </div>
        </section>
    )
}

export default ReachTheRightCustomerSection
