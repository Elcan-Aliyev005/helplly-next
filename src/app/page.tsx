

import MoodboardSection from "@/sections/moodboard.section";
import HowDoesItWorkSection from "@/sections/how-does-it-work.section";
import ThirdSection from "@/sections/third.section";
import ReachTheRightCustomerSection from "@/sections/reach-the-right-customer.section";
import FourthSection from "@/sections/fourth.section";
import FifthSection from "@/sections/fifth.section";
import SixthSection from "@/sections/sixth.section";
import FaqSection from "@/sections/faq.section";
import LastSection from "@/sections/last.section";
// import {useEffect} from "react";

function HomePage() {
    // useEffect(() => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth"
    //     });
    // }, []);
    return (
        <div className={'px-4'}>
            <MoodboardSection/>
            <HowDoesItWorkSection/>
            <ThirdSection/>
            <ReachTheRightCustomerSection/>
            <FourthSection/>
            <FifthSection/>
            <SixthSection/>
            <FaqSection/>
            <LastSection/>
        </div>
    )
}

export default HomePage