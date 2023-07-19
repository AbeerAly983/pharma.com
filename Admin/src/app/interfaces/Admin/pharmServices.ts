

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
  photo: Blob | string;
  time: string;
}

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
  photo: Blob;
  time: string;
}


export interface Res {
  message: string;
}