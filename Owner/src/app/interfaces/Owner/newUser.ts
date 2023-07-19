export interface NewUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
}

export interface NewUserStats {
  total_users_not_verify: number;
  new_user_today: number;
  new_user_month: number;
  new_user_year: number;
}