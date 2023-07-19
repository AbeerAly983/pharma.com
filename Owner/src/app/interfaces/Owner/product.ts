export interface numberOfProduct {
  total_products: number,
  product_today: number,
  product_month: number,
  product_year: number
}

export interface product{
  id: number,
  qrCode: number,
  name: string,
  price: string,
  currency: string,
  photo: string,
  quantity: number,
  description: string,
  created_at: string,
  updated_at: string,
  type_id: number,
  ingredients: string,
  howToUSe: string,
  brandCountry:string,
  company_name: string,
  characteristics: string,
  app_area: string,
  for_whom: string,
  purpose: string,
  production_date: string,
  expiry_date: string,
  disable: number,
  reorder_point: number,
  photo_1: string,
  photo_2: string,
  photo_3: string,
  photo_4: string
}
