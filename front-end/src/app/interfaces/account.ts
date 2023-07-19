export interface Account {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  email_verified_at:string
  created_at: string;
  updated_at: string;
  city: string;
  street: string;
  phone: number | any;
  photo: Blob;
}

export interface AccountShortData {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}
export interface updatePassword {
email: string | null,
old_password: string,
new_password: string,
new_password_confirmation: string;
}

export interface updateEmail {
email: string
}
