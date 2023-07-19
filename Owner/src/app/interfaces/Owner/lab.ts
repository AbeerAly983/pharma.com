export interface Lab {
  id: number;
  name: string;
  type_of_medical_analyses: string;
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

export interface LabStats {
  total_labs: number;
  lab_today: number;
  lab_month: number;
  lab_year: number;
}