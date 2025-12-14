

import MoodboardSection from "@/sections/moodboard.section";
import HowDoesItWorkSection from "@/sections/how-does-it-work.section";
import ThirdSection from "@/sections/third.section";
import ReachTheRightCustomerSection from "@/sections/reach-the-right-customer.section";
import FourthSection from "@/sections/fourth.section";
import FifthSection from "@/sections/fifth.section";
import BusinessSection from "@/sections/business.section";
import FaqSection from "@/sections/faq.section";
import LastSection from "@/sections/last.section";
import AboutSection from "@/sections/about.section";
import WhoIsExecutorSection from "@/sections/who-is-executor.section";
// import {useEffect} from "react";

function HomePage() {
    return (
        <div className={'px-4'}>
            <MoodboardSection/>
            <AboutSection/>
            <BusinessSection/>
            <HowDoesItWorkSection/>
            <FourthSection/>
            <ThirdSection/>
            <WhoIsExecutorSection/>
            <ReachTheRightCustomerSection/>
            <FifthSection/>
            <FaqSection/>
            <LastSection/>
        </div>
    )
}

export default HomePage