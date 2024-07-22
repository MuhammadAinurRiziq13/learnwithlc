import { FooterProps } from "@/types/guest/landing";
import { FaFacebook, FaInstagram, FaWhatsapp, FaRegCopyright } from "react-icons/fa";
import ApplicationLogo from "./ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Footer({ content }: FooterProps) {
    return (
        <footer className="flex flex-col py-5 w-[85vw] mx-auto mt-24">
            <div className="flex flex-col lg:flex-row font-default">
                {/* Insight Company */}
                <div className="flex flex-col mb-5 lg:w-1/2">
                    <ApplicationLogo className="text-3xl mb-5" />
                    <div className="w-full lg:w-3/4">
                        <p className="text-justify">
                            {content.about}
                        </p>
                    </div>
                </div>
                {/* End Insight Company */}

                {/* Popular Course */}
                <div className="flex flex-col gap-3 mb-5 lg:w-3/12">
                    <>
                        <h4 className="font-bold uppercase">Mata Pelajaran</h4>
                    </>
                    <ul className="flex flex-col gap-2 text-gray-400">
                        {content.popularCourses.map((course) => (
                            <li>
                                <Link href={course.redirectTo}>
                                    {course.courseName}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* End Popular Course */}

                {/* Navigations */}
                <div className="flex flex-col gap-3 mb-5 lg:w-2/12">
                    <>
                        <h4 className="font-bold uppercase">Navigations</h4>
                    </>
                    <ul className="flex flex-col gap-2 text-gray-400">
                        {content.navigations.map((course) => (
                            <li>
                                <Link href={course.redirectTo}>
                                    {course.navItem}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* End Navigations */}

                {/* Contacts */}
                <div className="flex flex-col gap-3 mb-5">
                    <>
                        <h4 className="font-bold uppercase">Contacts</h4>
                    </>
                    <ul className="flex flex-col gap-2">
                        <li className="flex flex-col">
                            <h4 className="font-bold">Hubungi Kami: </h4>
                            <span>{content.contacts.phoneNumber}</span>
                        </li>
                        <li className="flex flex-col">
                            <h4 className="font-bold">Email Kami Pada: </h4>
                            <span>{content.contacts.email}</span>
                        </li>
                    </ul>
                </div>
                {/* End Contacts */}
            </div>
            <div className="flex flex-col-reverse gap-5 lg:flex-row justify-between items-center py-6">
                {/* Copyright */}
                <span className="flex items-center gap-2">
                    <FaRegCopyright />
                    {content.copyright}
                </span>
                {/* End Copyright */}

                {/* Social Media */}
                <ul className="flex items-center gap-6 text-3xl">
                    <li className="text-light-blue">
                        <a href={content.contacts.facebook}>
                            <FaFacebook />
                        </a>
                    </li>
                    <li className="text-light-turqoise">
                        <a href={content.contacts.whatsapp}>
                            <FaWhatsapp />
                        </a>
                    </li>
                    <li className="text-light-salmon">
                        <a href={content.contacts.instagram}>
                            <FaInstagram />
                        </a>
                    </li>
                </ul>
                {/* End Social Media */}
            </div>
        </footer>
    )
}