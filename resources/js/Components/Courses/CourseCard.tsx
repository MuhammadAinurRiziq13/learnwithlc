import { LessonProps } from "@/types/guest/landing";
import { Link } from "@inertiajs/react";
import { Card } from "flowbite-react";
import { FaNoteSticky, FaPlay, FaUser, FaRegHeart, FaShareNodes, FaShare } from "react-icons/fa6";
import { GiWoodenChair } from "react-icons/gi";

export default function CourseCard({ lesson }: { lesson: LessonProps }) {
    return (
        <Card
            className="max-w-sm rounded-xl overflow-hidden relative"
            renderImage={() => (
                <img
                    src="/assets/images/close-up-hand-writing.jpg"
                    alt="image 1"
                    className="min-w-[102%] relative top-[-5px] left-[-5px] rounded-3xl rotate-[2deg]"
                />
            )}
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {lesson.name}
            </h5>
            <Link href="" className="w-[80px] h-[80px] bg-gray-900 absolute right-16 top-52 rounded-full text-gray-500 hover:text-white flex justify-center items-center text-3xl border-4 border-white">
                <FaPlay />
            </Link>
            <p className="font-normal text-gray-700 dark:text-gray-400"></p>
            <div className="flex flex-col">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <FaNoteSticky className="text-light-blue" />
                        <span className="text-gray-700">{lesson.amount_chapter} Materi</span>
                    </div>
                    <div className="flex justify-end items-center gap-2">
                        <FaUser className="text-light-blue" />
                        <span className="text-gray-700">{lesson.amount_registered_user} Murid Terdaftar</span>
                    </div>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <GiWoodenChair className="text-light-blue" />
                        <span className="text-gray-700">Kelas {lesson.targeted_class}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button>
                            <FaShareNodes />
                        </button>
                        <button>
                            <FaRegHeart />
                        </button>
                    </div>
                </div>
            </div>
        </Card>
    )
}