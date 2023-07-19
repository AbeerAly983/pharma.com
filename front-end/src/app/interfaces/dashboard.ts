import { Account } from "./account"

export interface AllOrder {
  id:number,
  user_id:number,
  product_id:number,
  quantity:number|any,
  price:string|any,
  delivery_status:number,
  canceled:number,
  created_at:string,
  updated_at:string,
  totalPrice:string,
  product:product
  user:Account,
  length:number

}

export interface pending{
  id: number,
  order_id: number,
  created_at: string,
  updated_at: string,
  order:AllOrder
}

export interface shipped{
  id:number,
  user_id:number,
  product_id:number,
  quantity:number|any,
  price:string|any,
  delivery_status:number,
  canceled:number,
  created_at:string,
  updated_at:string,
  totalPrice:string,
  product:product
}

export interface product{
  id:number,
  qrCode:number,
  name:string,
  price:string,
  currency:string,
  photo:string,
  quantity:number,
  description:string,
  created_at:string,
  updated_at:string,
  type_id:number,
  ingredients:string,
  howToUSe:string,
  brandCountry:string,
  company_name:string,
  characteristics:string,
  app_area:string,
  for_whom:string,
  purpose:string,
  production_date:string,
  expiry_date:string,
  disable:number,
  reorder_point:number
}

