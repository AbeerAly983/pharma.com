export interface Register {
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    password_confirmation: string
}

export interface Login {
    email: string | any,
    password: string,
}

export interface ForgetPassword {
    email: string
}

export interface ResetPassword {
    password: string,
    password_confirmation: string,
    email: string | null,
    otp: string;
}

export interface Verification {
    email: string | any,
    otp: string;
}

export interface ResponseMsg {
    data: object,
    msg: string,
    status: number;
}

