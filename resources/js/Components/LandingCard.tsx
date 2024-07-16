import { Link } from "@inertiajs/react";
import { ReactNode } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface LandingCardProps {
    tag: string;
    content: string;
    redirectTo: string;
    className: string;
    icon?: ReactNode;
}

export default function LandingCard({
    tag,
    content,
    redirectTo,
    className = "",
    icon,
}: LandingCardProps) {
    return (
        <div className={`px-4 py-2 rounded-xl ${className}`}>
            <div className="flex items-center px-4 py-2 text-white">
                <div className="grow text-xl">{tag}</div>
                <div className="flex flex-1 justify-end">
                    <Link href={redirectTo}>
                        <FaArrowRightLong />
                    </Link>
                </div>
            </div>
            <div className="px-4 text-white">
                <div>
                    <h4 className="text-2xl font-default font-bold">
                        {content}
                    </h4>
                </div>
                <div className="flex justify-between items-end mt-5">
                    <span className="">LearnWithLC</span>
                    <span className="text-8xl opacity-30">{icon && icon}</span>
                </div>
            </div>
        </div>
    );
}
