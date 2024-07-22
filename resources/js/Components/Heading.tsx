interface HeadingProps {
    head: string;
    subhead: string;
    className?: string;
}

export default function Heading({ head, subhead, className = "" }: HeadingProps) {
    return (
        <div className={`font-default font-bold text-center mt-16 mb-6 w-3/5 ${className}`}>
            <span className="text-primary">{head}</span>
            <p className="text-3xl">{subhead}</p>
        </div>
    )
}