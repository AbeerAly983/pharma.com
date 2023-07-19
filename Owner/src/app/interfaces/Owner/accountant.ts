export interface Accountant {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  photo: string;
  password: string;
  password_confirmation: string;
  email_verified_at: string;
  created_at: string | null;
  updated_at: string;
  disable: number
}

export interface AccountantStats {
  total_accountants: number;
  accountant_today: number;
  accountant_month: number;
  accountant_year: number;
}