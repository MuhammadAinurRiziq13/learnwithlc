import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Company, CompanyTestimonial, LessonProps } from "@/types/guest/landing";
import Navbar from "@/Components/Navigations/Navbar";
import LandingCard from "@/Components/LandingCard";
import Heading from "@/Components/Heading";
import CourseCard from "@/Components/Courses/CourseCard";
import Footer from "@/Components/Footer";
import { Card, Carousel } from "flowbite-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { GoRocket } from "react-icons/go";
import { FaArrowRightLong, FaQuoteLeft } from "react-icons/fa6";
import {
    FaBookReader,
    FaPencilRuler,
    FaUsers,
    FaAngleRight,
} from "react-icons/fa";

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

            <main className="w-[85vw] mx-auto">
                <section className="mt-28 md:mt-32">
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

                <section className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
                        <LandingCard
                            tag="Belajar"
                            content="Nikmati kemudahan belajar yang interaktif dan terstruktur"
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
                                    src="assets/images/woman-confused.png"
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
                </section>

                <section id="about_us">
                    <Heading head="About Us" subhead="Belum Mengenal Kami?" />

                    <div className="flex flex-col lg:flex-row justify-center gap-8">
                        <div className="flex flex-col lg:w-[400px]">
                            <div>
                                <h4 className="text-2xl font-bold text-center lg:text-start">
                                    Tempat untuk diskusi dan juga mencari
                                    jawaban atas apa yang Anda bingungkan
                                </h4>
                            </div>
                            <div className="flex justify-center lg:justify-between items-center mt-5">
                                <Link
                                    href=""
                                    className="flex items-center gap-3 px-4 h-[50px] rounded-3xl bg-gray-500 text-white"
                                >
                                    Discuse Now
                                    <FaArrowRightLong />
                                </Link>
                                <img
                                    src="assets/images/card 1.png"
                                    alt="Card 1"
                                    className="w-[150px]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col lg:w-[400px]">
                            <div>
                                <h4 className="text-2xl font-bold text-center lg:text-start">
                                    Ruang untuk belajar materi sekolah dengan
                                    cara yang lebih mudah dan interaktif
                                </h4>
                            </div>
                            <div className="flex justify-center lg:justify-between items-center mt-5">
                                <Link
                                    href=""
                                    className="flex items-center gap-3 px-4  h-[50px] rounded-3xl bg-gray-500 text-white"
                                >
                                    Learn Now
                                    <FaArrowRightLong />
                                </Link>
                                <img
                                    src="assets/images/card 2.png"
                                    alt="Card 2"
                                    className="w-[150px]"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <>
                    <Heading
                        head="Keseruan bersama LC"
                        subhead="Banyak Hal Seru di LC"
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
                </>

                <>
                    <Heading
                        head="Testimoni Siswa"
                        subhead="Apa Kata Mereka?"
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
                                        <div className="text-light-blue text-5xl">
                                            <FaQuoteLeft />
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
                </>

                <>
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
                </>

                <Footer content={content.footer} />
            </main>
        </div >
    );
}
