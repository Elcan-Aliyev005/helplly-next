import type {ReactNode} from "react";

interface Props{
    children: ReactNode;
    className?:string;
    circleClassName?:string;
}
function SectionName({className, circleClassName, children}:Props) {
    return (
        <h2 className={`flex items-center gap-1 text-[12px]  leading-4 md:text-[13px] md:leading-5 text-[#108910]  ${className} `}>
            <span className={`inline-block ${circleClassName} w-[10px] h-[10px] rounded-full bg-[#108910]`}></span>
            {children}
        </h2>
    )
}

export default SectionName
