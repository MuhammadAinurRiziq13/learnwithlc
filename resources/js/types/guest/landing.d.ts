import { User } from "@/types/index";

export interface LessonProps {
    id: string;
    name: string;
    description: string;
    targeted_class: number;
    amount_chapter: number;
    amount_registered_user: number;
    avg_rating: number;
    created_at: Date;
    updated_at: Date;
}

export interface CompanyTestimonial {
    id: string;
    testimoni: string;
    testimoner: User;
}

export interface Company {
    about: string;
    description: string;
}

export interface PopularCourseType {
    courseName: string;
    redirectTo: string;
}

export interface NavigationLandingType {
    navItem: string;
    redirectTo: string;
}

export type FooterProps = {
    content: {
        about: string;
        popularCourses: Array<PopularCourseType>
        navigations: Array<NavigationLandingType>
        copyright: string;
        contacts: {
            facebook: string;
            whatsapp: string;
            instagram: string;
            email: string;
            phoneNumber: string;
        }
    }
}