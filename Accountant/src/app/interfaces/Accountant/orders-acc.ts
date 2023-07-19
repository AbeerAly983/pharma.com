export interface OrdersAcc {
  order_id: number,
  product_name: string,
  qrCode: number,
  photo: Blob,
  quantity: number,
  price: string,
  user_name:string,
  phone: number
}
export interface cancel{
  order_id: number,
  canceled_quantity:number|any
  delivered_quantity:number|any
}
