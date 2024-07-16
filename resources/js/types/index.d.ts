export interface User {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    phone_number: string;
    email: string;
    email_verified_at: string;
    photo: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};