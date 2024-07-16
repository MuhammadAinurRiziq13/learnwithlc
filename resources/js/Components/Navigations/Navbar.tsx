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

                        <div className="hidden space-x-8 lg:-my-px lg:ms-10 lg:flex">
                            <NavLink
                                href={route("landing.page")}
                                active={route().current("landing.page")}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                href={route("courses")}
                                active={route().current("courses")}
                            >
                                Courses
                            </NavLink>
                            <NavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                            >
                                Forum
                            </NavLink>

                            <div className="flex flex-col justify-center items-center">
                                <a
                                    href={route("dashboard")}
                                    className="bg-primary text-white text-sm px-4 py-1 rounded-xl"
                                >
                                    Try Now
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:flex lg:items-center lg:ms-6">
                        <div className="flex items-center max-w-lg mx-auto">
                            <label htmlFor="voice-search" className="sr-only">
                                Search
                            </label>
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    id="voice-search"
                                    className="bg-gray-primary border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pe-10 py-3"
                                    placeholder="Search for Courses"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 end-0 flex items-center pe-3"
                                >
                                    <FaSearch />
                                </button>
                            </div>
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
                    <ResponsiveNavLink
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                    >
                        Home
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
