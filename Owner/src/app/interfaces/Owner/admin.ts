export interface Admin {
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
  disabled: number
}

export interface AdminStats {
  total_admins: number;
  admin_today: number;
  admin_month: number;
  admin_year: number;
}