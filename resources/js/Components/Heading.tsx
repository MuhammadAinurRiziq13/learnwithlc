interface HeadingProps {
    head?: string;
    subhead: string;
}

export default function Heading({ head, subhead }: HeadingProps) {
    return (
        <div className="font-default font-bold text-center mt-16 mb-6 w-3/5 mx-auto">
            <span className="text-primary">{head}</span>
            <p className="text-3xl">{subhead}</p>
        </div>
    )
}