import ApplicationLogo from "@/Components/ApplicationLogo";
import { PropsWithChildren } from "react";

export default function UauthenticatedLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-100">
            <div className="flex flex-col p-6 bg-white">
                <div className="flex-1">
                    <ApplicationLogo />
                </div>
                <div className="grow">
                    {children}
                </div>
            </div>
        </div>
    )
}