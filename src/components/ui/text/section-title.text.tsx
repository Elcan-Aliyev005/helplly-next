import type {ReactNode} from "react";

interface Props{
    children: ReactNode;
    className?:string;
}
function SectionTitle({className, children}:Props) {
    return (
        <h2 className={`text-[20px] leading-6  lg:text-[32px] lg:leading-10 font-semibold ${className}` }>{children}</h2>
    )
}

export default SectionTitle
