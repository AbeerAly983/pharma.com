export interface Coordinator {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    email_verified_at: string;
    photo: Blob;
    phone: string
    created_at: string | null;
    updated_at: string;
}

export interface CoordinatorShortData {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
}

export interface updatePassword {
    email: string | null,
    oldPassword: string,
    password: string,
    password_confirmation: string;
}

export interface updateEmail {
    email: string
}