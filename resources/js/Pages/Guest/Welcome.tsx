import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Company, CompanyTestimonial, LessonProps } from "@/types/guest/landing";
import Navbar from "@/Components/Navigations/Navbar";
import LandingCard from "@/Components/LandingCard";
import Heading from "@/Components/Heading";
import CourseCard from "@/Components/Courses/CourseCard";
import Footer from "@/Components/Footer";
import { Card, Carousel,Accordion } from "flowbite-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { GoRocket } from "react-icons/go";
import { FaArrowRightLong, FaQuoteLeft } from "react-icons/fa6";
import {
    FaBookReader,
    FaPencilRuler,
    FaUsers,
    FaAngleRight,
    FaWifi ,
    FaUserFriends,
    FaVideo, 
    FaWhatsapp 
} from "react-icons/fa";
import { GiChemicalDrop } from 'react-icons/gi';


import content from "@/utils/content/landing.json"

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default function Welcome({
    auth,
    company,
    testimonials,
    popularLesson,
}: PageProps<{
    company: Company,
    testimonials: CompanyTestimonial[],
    popularLesson: LessonProps[]
}>) {

    return (
        <div className="bg-gray-100">
            <Head title="Lentera Cendekia" />

            <Navbar user={auth.user} />

            <main className="w-full mx-auto">
                <section className="mt-28 md:mt-32 w-[85vw] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="flex flex-col gap-4">
                            <h1
                                className="text-5xl font-extrabold font-default"
                                dangerouslySetInnerHTML={{
                                    __html: company.about,
                                }}
                            ></h1>
                            <h4 className="text-2xl">{company.description}</h4>
                            <div className="flex flex-col lg:flex-row gap-3 mt-5 lg:mt-20">
                                <a
                                    href=""
                                    className="bg-primary px-8 py-4 text-white text-xl text-center rounded-2xl"
                                >
                                    Mulai Sekarang
                                </a>
                                <a
                                    href=""
                                    className="flex justify-center items-center gap-2 border border-primary px-8 py-4 text-primary text-xl hover:bg-primary hover:text-white rounded-2xl"
                                >
                                    <GoRocket />
                                    Eksplorasi
                                </a>
                            </div>
                        </div>
                        <div className="hidden lg:flex justify-end ">
                            <img
                                src="assets/images/hero.png"
                                className="w-[450px] lg:w-[580px]"
                            />
                        </div>
                    </div>
                </section>

                {/* <section className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
                        <LandingCard
                            tag="Belajar"
                            content="Nikmati kemudahan belajar yang interaktif dan terstruktur."
                            redirectTo=""
                            className="bg-light-salmon"
                            icon={<FaBookReader />}
                        />
                        <LandingCard
                            tag="Berdiskusi"
                            content="Bertanya dan juga dapatkan jawaban dari apa yang Anda bingungkan"
                            redirectTo=""
                            className="bg-light-periwinkle"
                            icon={<FaPencilRuler />}
                        />
                        <LandingCard
                            tag="Cari Teman Belajar"
                            content="Diskusikan bersama, Cari teman untuk diskusi lebih menyenangkan"
                            redirectTo=""
                            className="bg-light-turqoise"
                            icon={<FaUsers />}
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6">
                        <LandingCard
                            tag="Komunitas dan tutor"
                            content="Ada kebingungan?, malu untuk bertanya di Forum?. Tanyakan ke mentor saja"
                            redirectTo=""
                            className="bg-light-periwinkle"
                            icon={
                                <img
                                    src="assets/images/woman-confused.svg"
                                    className=""
                                />
                            }
                        />
                        <LandingCard
                            tag="Latihan dan Evaluasi"
                            content="Berlatih dan juga evaluasi kemampuan kamu. Segera tanyakan kebingungan Anda"
                            redirectTo=""
                            className="bg-light-salmon"
                            icon={
                                <img
                                    src="assets/images/man-playing-phone.jpg"
                                    className="-mb-2"
                                />
                            }
                        />
                        <LandingCard
                            tag="Komunitas"
                            content="Gabung ke komunitas, bangun komunikasi antar sesama!"
                            redirectTo=""
                            className="bg-light-turqoise flex-1"
                        />
                    </div>
                </section> */}

                <section id="tentangKami"  className="w-[85vw] mx-auto">
                    <div className="flex flex-col lg:flex-row mb-10 lg:gap-20">
                        <div className="order-2 lg:order-1">
                            <img
                                src="assets/images/about1.svg"
                                alt="About 1"
                                className="w-[350px]"
                            />
                        </div>

                        <div className="flex flex-col lg:w-[800px] order-1 lg:order-2">
                            <Heading head="Tentang Kami" subhead="Belum Mengenal Kami?" className="lg:text-start mx-auto lg:mx-0"/>
                            <div>
                                <h4 className="text-xl text-start">
                                Lembaga Bimbingan Belajar (LBB) Lentera Cendekia hadir untuk mengatasi permasalahan belajar siswa dan wali siswa. Kami menciptakan lingkungan belajar yang menyenangkan melalui metode "Fun and Meaningful Learning," yang memastikan siswa memahami konsep dasar, bukan hanya menghafal.
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center lg:gap-20">
                        <div className="flex flex-col lg:w-[800px] justify-center">
                            <div>
                                <h4 className="text-xl text-start lg:text-end mb-5">
                                Dengan mentor yang kompeten dan ramah, serta kegiatan menarik seperti praktikum dan outing class, Lentera Cendekia menjadikan belajar lebih menarik dan tidak membosankan. Kami juga menyediakan pendekatan yang disesuaikan dengan kebutuhan setiap siswa.
                                </h4>
                                <h4 className="text-xl text-start lg:text-end">
                                Di Lentera Cendekia, belajar menjadi petualangan yang menyenangkan dan penuh makna. Mari bergabung dan lihat bagaimana kami dapat membuat proses belajar anak Anda lebih efektif dan menyenangkan.
                                </h4>
                            </div>
                        </div>

                        <img
                                    src="assets/images/about2.svg"
                                    alt="About 2"
                                    className="w-[350px]"
                                />

                    </div>
                </section>

                <section id="keunggulan" className="w-[85vw] mx-auto">
                <Heading head="Keunggulan" subhead="Kenapa Harus Memilih LC?" className="mx-auto"/>
                    <div className="flex flex-col lg:flex-row justify-center lg:gap-20 items-center mb-10">
                        
                            <img
                                    src="assets/images/keunggulan1.svg"
                                    alt="About 1"
                                    className="lg:w-[330px] w-[300px]"
                                />

                        <div className="flex flex-col lg:w-[800px] justify-center">
                            <div>
                                <h2 className="text-3xl font-bold text-start mb-5">Nikmati Kemudahan Belajar Interaktif dan Menyenangkan</h2>
                                <h4 className="text-xl text-start">
                                Dengan dukungan tmentor yang ramah dan berpengalaman, serta berbagai aktivitas menarik seperti simulasi, praktikum, dan outing class, siswa akan merasa lebih termotivasi dan antusias dalam belajar                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center lg:gap-20 items-center my-10">
                        <div className="flex flex-col lg:w-[800px] justify-center order-2 lg:order-1">
                            <div>
                            <h2 className="text-3xl font-bold text-start lg:text-end mb-5">Nikmati Kemudahan Belajar Interaktif dan Menyenangkan</h2>
                                <h4 className="text-xl text-start lg:text-end mb-3">
                                Diskusi bersama dengan teman di LBB Lentera Cendekia memungkinkan siswa untuk saling berbagi pengetahuan dan solusi, sehingga memperdalam pemahaman mereka terhadap materi pelajaran.                                </h4>
                            </div>
                        </div>

                        <img
                                    src="assets/images/keunggulan2.svg"
                                    alt="About 2"
                                    className="lg:w-[350px] w-[300px] order-1 lg:order-2 my-10"
                                />

                    </div>
                    <div className="flex flex-col lg:flex-row justify-center lg:gap-20 items-center my-10">
                            <img
                                    src="assets/images/keunggulan3.svg"
                                    alt="About 1"
                                    className="lg:w-[350px] w-[300px] my-10"
                                />

                        <div className="flex flex-col lg:w-[800px] justify-center">
                            <div>
                                <h2 className="text-3xl font-bold text-start mb-5">Pendekatan Pembelajaran yang Disesuaikan</h2>
                                <h4 className="text-xl text-start">
                                Pendekatan belajar di Lentera Cendekia disesuaikan dengan kebutuhan dan gaya belajar setiap siswa, memastikan bimbingan yang optimal dan personal.</h4>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="program" className="w-[85vw] mx-auto">
                <Heading head="Program" subhead="Apa aja sih Program Unggulan Kami?" className="mx-auto"/>
                    <div className="flex flex-col lg:flex-row items-end justify-end font-bold mt-16 mb-6">
                        {/* <p className="text-3xl">Kelas paling diminati</p> */}
                        <Link href="">
                            <span className="flex items-center gap-1 text-primary">
                                Telusuri lebih banyak
                                <FaAngleRight />
                            </span>
                        </Link>
                    </div>

                    <div className="flex flex-col items-center lg:flex-row lg:items-start justify-center flex-wrap gap-8">
                        {popularLesson.map((lesson, index) => (
                            <CourseCard lesson={lesson} key={index} />
                        ))}
                    </div>
                </section>

                <section id="fasilitas" className="bg-primary mx-auto my-24 py-16">
                <div className="font-default font-bold text-center mb-14 w-3/5 mx-auto">
                    <span className="text-white">Fasilitas</span>
                    <p className="text-white text-3xl">Fasilitas Terbaik untuk Mendukung Pembelajaran yang Optimal dan Menyenangkan</p>
                </div>
                <div className="flex w-[85vw] mx-auto gap-10 text-white lg:flex-row flex-col">
                    <div className="flex flex-col justify-center order-1 lg:order-1">
                        <div className="flex flex-col justify-center mb-10">
                            <div>
                                <div className="flex justify-start lg:justify-end">
                                    <FaWifi size={40} />
                                </div>
                                <h2 className="text-3xl lg:text-xl font-bold text-start lg:text-end mb-5">Full AC dan Wifi</h2>
                                <h4 className="text-xl lg:text-base text-start lg:text-end">
                                    Kelas dengan full AC dan Wifi yang menunjang kenyamanan dan proses belajar bagi peserta didik
                                </h4>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div>
                                <div className="flex justify-start lg:justify-end">
                                    <GiChemicalDrop size={40} />
                                </div>
                                <h2 className="text-3xl lg:text-xl font-bold text-start lg:text-end mb-5">Praktikum Kelas online / offline</h2>
                                <h4 className="text-xl lg:text-base text-start lg:text-end">
                                    Kami memadukan kelas online dan offline. Ada praktikum juga untuk membantu peserta didik memahami materi pembelajaran
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center order-3 lg:order-2">
                                <img
                                    src="assets/images/fasilitas.svg"
                                    alt="About 1"
                                    className="lg:w-[800px] w-[300px]"
                                />
                    </div>
                    <div className="flex flex-col justify-center order-2 lg:order-3">
                            <div className="flex flex-col justify-center mb-10">
                                <div>
                                <div className="flex justify-start lg:justify-start">
                                    <FaUserFriends  size={40} />
                                </div>
                                    <h2 className="text-3xl lg:text-xl font-bold text-start lg:text-start mb-5">Kelas exclusive pendampingan ujian sekolah</h2>
                                    <h4 className="text-xl lg:text-base text-start lg:text-start">
                                    Tiap kelompok belajar hanya 5 - 6 siswa membuat hasil belajar lebih maksimal serta adanya pendampingan khusus selama ujian baik PTS, PAT, dan USEK</h4>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div>
                                <div className="flex justify-start lg:justify-start">
                                    <FaVideo   size={40} />
                                </div>
                                    <h2 className="text-3xl lg:text-xl font-bold text-start lg:text-start mb-5">Follow Up</h2>
                                    <h4 className="text-xl lg:text-base text-start lg:text-start">
                                    Bimbingan via WhatsApp dan g-meet untuk tugas sekolah dan PR</h4>
                                </div>
                            </div>
                    </div>
                </div>
                </section>

                <section id="aktifitas" className="w-[85vw] mx-auto my-24">
                    <Heading
                        head="Keseruan bersama LC"
                        subhead="Banyak Hal Seru di LC"
                        className="mx-auto"
                    />

                    <div className="w-[300px] sm:w-[500px] lg:w-[850px] h-72 sm:h-80 xl:h-85 2xl:h-96 mx-auto">
                        <Carousel slideInterval={1500} >
                            <img
                                src="/assets/images/carousel/carousel-1.jpg"
                                alt="Slide 1"
                                className="rounded-lg"
                            />
                            <img
                                src="/assets/images/carousel/carousel-2.jpg"
                                alt="Slide 2"
                                className="rounded-lg"
                            />
                        </Carousel>
                    </div>
                </section>

                <section id="pengajar" className="w-[85vw] mx-auto my-24">
                <Heading head="Team Teaching" subhead="Kenalan Sama Team Teaching LC!" className="mx-auto"/>
                        <div className="flex justify-center flex-col lg:flex-row lg:gap-16 gap-7">
                            <div  className="flex flex-col lg:w-[300px] justify-center items-center">
                                <img
                                    src="assets/images/pengajar.svg"
                                    alt="About 2"
                                    className="lg:w-[350px] w-[250px]"
                                />
                                <div className="flex flex-col lg:w-[320px] w-[270px]  justify-center items-center py-5 -mt-10 bg-primary text-white rounded-2xl">
                                    <h2 className="text-2xl font-bold text-center lg:text-end mb-2">Andi</h2>
                                    <h4 className="text-sm text-center lg:text-end mb-2">Guru Science</h4>
                                    <h4 className="text-base text-center lg:text-end mb-2">
                                    Lulusan Universitas ABCDE                                    </h4>
                                </div>
                            </div>
                            <div  className="flex flex-col lg:w-[300px] justify-center items-center">
                                <img
                                    src="assets/images/pengajar.svg"
                                    alt="About 2"
                                    className="lg:w-[350px] w-[250px]"
                                />
                                <div className="flex flex-col lg:w-[320px] w-[270px]  justify-center items-center py-5 -mt-10 bg-primary text-white rounded-2xl">
                                    <h2 className="text-2xl font-bold text-center lg:text-end mb-2">Andi</h2>
                                    <h4 className="text-sm text-center lg:text-end mb-2">Guru Science</h4>
                                    <h4 className="text-base text-center lg:text-end mb-2">
                                    Lulusan Universitas ABCDE                                    </h4>
                                </div>
                            </div>
                            <div  className="flex flex-col lg:w-[300px] justify-center items-center">
                                <img
                                    src="assets/images/pengajar.svg"
                                    alt="About 2"
                                    className="lg:w-[350px] w-[250px]"
                                />
                                <div className="flex flex-col lg:w-[320px] w-[270px]  justify-center items-center py-5 -mt-10 bg-primary text-white rounded-2xl">
                                    <h2 className="text-2xl font-bold text-center lg:text-end mb-2">Andi</h2>
                                    <h4 className="text-sm text-center lg:text-end mb-2">Guru Science</h4>
                                    <h4 className="text-base text-center lg:text-end mb-2">
                                    Lulusan Universitas ABCDE                                    </h4>
                                </div>
                            </div>
                        </div>
                </section>

                <section id="testimoni" className="w-[85vw] mx-auto my-24">
                    <Heading
                        head="Testimoni Siswa"
                        subhead="Apa Kata Mereka?"
                        className="mx-auto"
                    />

                    <Swiper
                        spaceBetween={30}
                        freeMode={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        modules={[FreeMode]}
                        className="mySwiper"
                    >
                        {testimonials.map((testimony, index) => (
                            <SwiperSlide key={index}>
                                <Card>
                                    <div>
                                        <div className="flex justify-between">
                                            <div className="text-light-blue bg-blue-300 text-5xl rounded-full p-2 -ml-10 -mt-4">
                                                <FaQuoteLeft />
                                            </div>
                                            <h4 className="text-sm text-center lg:text-end mb-2">Diterima di <b>Psikologi - UI</b></h4>
                                        </div>
                                        <p className="text-lg font-default line-clamp-4">
                                            {testimony.testimoni}
                                        </p>
                                    </div>
                                    <div className="flex mt-5">
                                        {testimony.testimoner.photo ? (
                                            <img
                                                src={testimony.testimoner.photo}
                                                alt="Testimoner Photo"
                                            />
                                        ) : (
                                            <div className="flex gap-3">
                                                <div className="w-[50px] h-[50px] flex justify-center items-center bg-gray-400 rounded-full">
                                                    {testimony.testimoner.firstname
                                                        .split(" ")
                                                        .map((word) =>
                                                            word.charAt(0)
                                                        )}
                                                </div>
                                                <div className="flex flex-col">
                                                    <div>
                                                        {testimony.testimoner
                                                            .firstname +
                                                            " " +
                                                            testimony.testimoner
                                                                .lastname}
                                                    </div>
                                                    <span>University</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>

                <section id="faq" className="w-[85vw] mx-auto my-24">
                    <Heading
                        head="FAQ"
                        subhead="Hal Yang Sering Ditanyakan"
                        className="mx-auto"
                    />
                    <div className="flex flex-col lg:flex-row lg:space-x-8 mt-14 justify-center mx-5">
                        <div className="w-[350px] flex-shrink-0 mx-auto lg:mx-0 mb-10">
                            <img
                                src="assets/images/faq.svg"
                                alt="About 2"
                                className="lg:w-full w-[300px] "
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start w-full">
                            <div className="w-full lg:w-[700px] bg-white p-4 rounded-lg shadow-lg mx-auto">
                                <Accordion>
                                    <Accordion.Panel>
                                        <Accordion.Title>What is Flowbite?</Accordion.Title>
                                        <Accordion.Content>
                                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                                Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                                                dropdowns, modals, navbars, and more.
                                            </p>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Check out this guide to learn how to&nbsp;
                                                <a
                                                    href="https://flowbite.com/docs/getting-started/introduction/"
                                                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                                                >
                                                    get started&nbsp;
                                                </a>
                                                and start developing websites even faster with components on top of Tailwind CSS.
                                            </p>
                                        </Accordion.Content>
                                    </Accordion.Panel>
                                    <Accordion.Panel>
                                        <Accordion.Title>Is there a Figma file available?</Accordion.Title>
                                        <Accordion.Content>
                                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                                Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                                                has a design equivalent in our Figma file.
                                            </p>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Check out the
                                                <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                                    Figma design system
                                                </a>
                                                based on the utility classes from Tailwind CSS and components from Flowbite.
                                            </p>
                                        </Accordion.Content>
                                    </Accordion.Panel>
                                    <Accordion.Panel>
                                        <Accordion.Title>Is there a Figma file available?</Accordion.Title>
                                        <Accordion.Content>
                                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                                Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                                                has a design equivalent in our Figma file.
                                            </p>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Check out the
                                                <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                                    Figma design system
                                                </a>
                                                based on the utility classes from Tailwind CSS and components from Flowbite.
                                            </p>
                                        </Accordion.Content>
                                    </Accordion.Panel>
                                    <Accordion.Panel>
                                        <Accordion.Title>Is there a Figma file available?</Accordion.Title>
                                        <Accordion.Content>
                                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                                Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                                                has a design equivalent in our Figma file.
                                            </p>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Check out the
                                                <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                                    Figma design system
                                                </a>
                                                based on the utility classes from Tailwind CSS and components from Flowbite.
                                            </p>
                                        </Accordion.Content>
                                    </Accordion.Panel>
                                    <Accordion.Panel>
                                        <Accordion.Title>Is there a Figma file available?</Accordion.Title>
                                        <Accordion.Content>
                                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                                Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                                                has a design equivalent in our Figma file.
                                            </p>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Check out the
                                                <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                                    Figma design system
                                                </a>
                                                based on the utility classes from Tailwind CSS and components from Flowbite.
                                            </p>
                                        </Accordion.Content>
                                    </Accordion.Panel>
                                    <Accordion.Panel>
                                        <Accordion.Title>What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
                                        <Accordion.Content>
                                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                                The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                                                Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                                                components, whereas Tailwind UI offers sections of pages.
                                            </p>
                                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                                However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                                                technical reason stopping you from using the best of two worlds.
                                            </p>
                                            <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                                                <li>
                                                    <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                                        Flowbite Pro
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="https://tailwindui.com/"
                                                        rel="nofollow"
                                                        className="text-cyan-600 hover:underline dark:text-cyan-500"
                                                    >
                                                        Tailwind UI
                                                    </a>
                                                </li>
                                            </ul>
                                        </Accordion.Content>
                                    </Accordion.Panel>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <>
                    <div className="flex flex-col lg:flex-row items-center lg:justify-between font-bold mt-16 mb-6">
                        <p className="text-3xl">Kelas paling diminati</p>
                        <Link href="">
                            <span className="flex items-center gap-1 text-primary">
                                Telusuri lebih banyak
                                <FaAngleRight />
                            </span>
                        </Link>
                    </div>

                    <div className="flex flex-col items-center lg:flex-row lg:items-start flex-wrap gap-6">
                        {popularLesson.map((lesson, index) => (
                            <CourseCard lesson={lesson} key={index} />
                        ))}
                    </div>
                </> */}
                
                <a href="#home" className="fixed bottom-5 right-5 md:bottom-10 md:right-10 z-[999] h-16 w-16 bg-[#25D366] rounded-full flex items-center justify-center text-white text-4xl">
                    <FaWhatsapp />
                </a>


                <Footer content={content.footer} />
            </main>
        </div >
    );
}
