import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import NavLink from "@/Components/Navigations/NavLink";
import Dropdown from "@/Components/Dropdown";
import ResponsiveNavLink from "@/Components/Navigations/ResponsiveNavLink";
import { useState } from "react";
import { User } from "@/types";
import { FaSearch } from "react-icons/fa";

export default function Navbar({ user }: { user: User }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <nav className="fixed w-full top-0 md:top-8 left-0 right-0 mx-auto bg-white z-50 md:w-[85vw] md:px-4 md:rounded-3xl shadow-lg">
            <div className="px-4">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="shrink-0 flex items-center">
                            <Link href="/">
                                <ApplicationLogo />
                            </Link>
                        </div>
                    </div>

                    <div className="hidden lg:flex lg:items-center lg:ms-6">
                        <div className="hidden space-x-8 lg:-my-px lg:ms-10 lg:flex mx-3">
                            <NavLink
                                href="#tentangKami"
                                // active={route().current("landing.page")}
                            >
                                Tentang Kami
                            </NavLink>
                            <NavLink
                                href="#keunggulan"
                                // active={route().current("landing.page")}
                            >
                                Keunggulan
                            </NavLink>
                            <NavLink
                                href="#program"
                                // active={route().current("landing.page")}
                            >
                                Program
                            </NavLink>
                            <NavLink
                                href="#fasilitas"
                                // active={route().current("landing.page")}
                            >
                                Fasilitas
                            </NavLink>
                            <NavLink
                                href="#aktifitas"
                                // active={route().current("landing.page")}
                            >
                                Aktifitas
                            </NavLink>
                            <NavLink
                                href="#pengajar"
                                // active={route().current("landing.page")}
                            >
                                Pengajar
                            </NavLink>
                            <NavLink
                                href="#testimoni"
                                // active={route().current("landing.page")}
                            >
                                Testimoni
                            </NavLink>
                            <NavLink
                                href="#faq"
                                // active={route().current("landing.page")}
                            >
                                FAQ
                            </NavLink>
                        </div>
                        <div className="ms-3 relative">
                            {user ? (
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                <img
                                                    src={user.photo}
                                                    className="rounded-full w-[50px]"
                                                />

                                                <svg
                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            ) : (
                                <div className="flex gap-2">
                                    <Link
                                        href={route("login")}
                                        className="bg-primary text-white px-4 py-2 rounded-xl"
                                    >
                                        Login
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="-me-2 flex items-center lg:hidden">
                        <button
                            onClick={() =>
                                setShowingNavigationDropdown(
                                    (previousState) => !previousState
                                )
                            }
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className={
                                        !showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={
                                        showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={
                    (showingNavigationDropdown ? "block" : "hidden") +
                    " lg:hidden"
                }
            >
                <div className="pt-2 pb-0 space-y-1">
                    {/* <ResponsiveNavLink
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                    >
                        Tentang Kami
                    </ResponsiveNavLink> */}
                    <ResponsiveNavLink
                                href="#tentangKami"
                                // active={route().current("landing.page")}
                            >
                                Tentang Kami
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href="#keunggulan"
                                // active={route().current("landing.page")}
                            >
                                Keunggulan
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href="#program"
                                // active={route().current("landing.page")}
                            >
                                Program
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href="#fasilitas"
                                // active={route().current("landing.page")}
                            >
                                Fasilitas
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href="#aktifitas"
                                // active={route().current("landing.page")}
                            >
                                Aktifitas
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href="#pengajar"
                                // active={route().current("landing.page")}
                            >
                                Pengajar
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href="#testimoni"
                                // active={route().current("landing.page")}
                            >
                                Testimoni
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href="#faq"
                                // active={route().current("landing.page")}
                            >
                                FAQ
                            </ResponsiveNavLink>
                </div>

                {user ? (
                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">
                                {user.firstname}
                            </div>
                            <div className="font-medium text-sm text-gray-500">
                                {user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route("profile.edit")}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                ) : (
                    <div>

                    </div>
                )}
            </div>
        </nav>
    );
}
