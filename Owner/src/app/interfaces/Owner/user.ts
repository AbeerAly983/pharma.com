export interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    email_verified_at: string;
    created_at: string | null;
    updated_at: string;
    city: string;
    street: string;
    phone: number;
    photo: string;
}

export interface UserStats {
  total_users: number;
  user_today: number;
  user_month: number;
  user_year: number;
}