
interface Props{
    title:string;
    className?:string;
}
export function TitleBadge({title, className}:Props) {
    return (
        <h3 className={`border-[#0F820F] ${className} text-[#0F820F] inline-block border rounded-full text-xs leading-4 px-[28px] py-[8px]`}>{title}</h3>
    )
}

export default TitleBadge
