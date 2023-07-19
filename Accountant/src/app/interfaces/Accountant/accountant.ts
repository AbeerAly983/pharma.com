export interface Accountant {
  photo: Blob;
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  password_confirmation: string;
  email_verified_at: string;
  created_at: string | null;
  updated_at: string;
  disable: number
}
export interface AccountantShortData {
  photo: Blob;
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