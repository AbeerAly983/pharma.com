export interface Doctor {
  id: number;
  name: string;
  specialize: string;
  appointment: string;
  city: string;
  residential_area: string;
  street: string;
  phone: string;
  created_at: string;
  updated_at: string;
  photo: string;
  time: string | null;
}

export interface DoctorStats {
  total_doctors: number;
  doctor_today: number;
  doctor_month: number;
  doctor_year: number;
}