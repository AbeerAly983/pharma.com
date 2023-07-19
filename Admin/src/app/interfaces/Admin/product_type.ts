export interface Type {
  id: number;
  type: string;
  photo: Blob;
  created_at: string;
  updated_at: string;
}


export interface Product {
  id: number;
  qrCode: number;
  name: string;
  price: string;
  currency: string;
  photo: Blob;
  photo_1: Blob;
  photo_2: Blob;
  photo_3: Blob;
  photo_4: Blob;
  quantity: number;
  description: string;
  created_at: string;
  updated_at: string;
  type_id: number;
  ingredients: string;
  howToUSe: string;
  brandCountry: string;
  company_name: string;
  characteristics: string;
  app_area: string;
  for_whom: string;
  purpose: string;
  production_date: string | null;
  expiry_date: string | null;
  disable: number;
  reorder_point: number;
  type: Type;
  discount: {
    id: number;
    product_id: number;
    presentage_Discount: string;
    discount_price: string;
    created_at: string;
    updated_at: string;
  };
}


