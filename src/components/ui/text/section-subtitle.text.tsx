import type {ReactNode} from "react";

interface Props{
    children: ReactNode;
    className?:string;
}
function SectionSubTitle({className, children}:Props) {
    return (
    <p className={`text-[#21212161] leading-6  max-w-[300px] md:max-w-[513px]  mx-auto  text-sm  ${className} `}>{children}</p>
    )
}

export default SectionSubTitle
