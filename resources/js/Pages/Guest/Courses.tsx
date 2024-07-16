"use client";

import CourseCard from "@/Components/Courses/CourseCard";
import Footer from "@/Components/Footer";
import Heading from "@/Components/Heading";
import Navbar from "@/Components/Navigations/Navbar";
import { PageProps } from "@/types";
import { LessonProps } from "@/types/guest/landing";
import { Head } from "@inertiajs/react";
import { Select } from "flowbite-react";
import { FaSearch } from "react-icons/fa";
import { FaSliders } from "react-icons/fa6";

import { footer } from "@/utils/content/landing.json"

export default function Courses({ auth, lessons }: PageProps<{
    lessons: LessonProps[]
}>) {
    return (
        <div className="bg-gray-100">

            <Head title="Lentera Cendekia - Courses" />

            <Navbar user={auth.user} />

            <main className="w-[85vw] mx-auto mt-36">
                {/* Jumbotron */}
                <div className="flex h-[305px] gap-4 overflow-hidden">
                    <div className="w-3/5">
                        <img src="assets/images/jumbotron-course-1.jpg"
                            alt="Child Writing"
                            className="rounded-l-xl h-full w-full object-cover"
                        />
                    </div>
                    <div className="w-2/5">
                        <img
                            src="assets/images/jumbotron-course-2.jpg"
                            alt="Child Learn with Writing on the book"
                            className="rounded-r-xl h-full w-full object-cover"
                        />
                    </div>
                </div>
                {/* End Jumbotron */}

                {/* Heading Search */}
                <Heading
                    head="Cari Pelajaran"
                    subhead="Mau Cari Pelajaran? atau Materi, Langsung Masukkan Dibawah!"
                />
                {/* End Heading Search */}

                {/* Search */}
                <div className="w-2/4 mx-auto bg-white p-3 rounded-lg flex justify-between items-center gap-2 font-default">
                    <div className="hidden lg:flex items-center gap-2 text-gray-400">
                        <FaSearch />
                        <span>Matematika</span>
                    </div>
                    <input
                        type="text"
                        className="border-none bg-none w-3/4 focus:outline-none focus:border-none focus:ring-0 text-xl font-bold placeholder:font-normal placeholder:text-gray-400"
                        placeholder="Cari kelas yang tepat"
                    />
                    <button className="bg-black text-white p-5 rounded-lg">
                        <FaSearch />
                    </button>
                </div>
                {/* End Search */}

                {/* Heading Persuading */}
                <Heading
                    subhead="Temukan Pelajaran yang Anda Inginkan atau Butuhkan"
                />
                {/* End Heading Persuading */}

                {/* Filter Buttons */}
                <div className="flex flex-col sm:flex-row justify-between items-center mt-16 gap-3">
                    <div className="flex flex-col sm:flex-row gap-3">
                        {/* Sorting */}
                        <div className="flex items-center bg-white rounded-3xl px-5 py-2">
                            <span>Urutkan Berdasarkan: </span>
                            <Select
                                id="sorting_courses"
                                className="border-none bg-none focus:outline-none focus:border-none focus:ring-0 text-base font-extrabold appearance-none "
                                style={{ border: 'none' }}
                            >
                                <option value="" className="text-base p-2">Popularity</option>
                                <option value="" className="text-base p-2">Harga</option>
                                <option value="" className="text-base p-2">Blablabla</option>
                            </Select>
                        </div>
                        {/* End Sorting */}

                        {/* Filter */}
                        <div className="flex items-center bg-white rounded-3xl px-5 py-2">
                            <span>Kategori: </span>
                            <Select
                                id="sorting_courses"
                                className="border-none bg-none focus:outline-none focus:border-none focus:ring-0 text-base font-extrabold appearance-none "
                                style={{ border: 'none' }}
                            >
                                <option value="" className="text-base p-2">Science</option>
                                <option value="" className="text-base p-2">Economy</option>
                                <option value="" className="text-base p-2">Social</option>
                            </Select>
                        </div>
                        {/* End Filter */}
                    </div>

                    <div>
                        <div className="flex gap-3">
                            <div className="flex items-center gap-2 bg-white px-5 py-2 rounded-3xl">
                                <FaSliders />
                                Filter
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Filter Buttons */}

                {/* Courses */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 place-items-center">
                    {lessons.map((lesson) => (
                        <CourseCard lesson={lesson} />
                    ))}
                </div>
                {/* End Courses */}

                <Footer content={footer} />
            </main>
        </div>
    )
}