export interface numberOfOrders {
  total_orders: number,
  order_today: number,
  order_month: number,
  order_year:number
}

export interface numberOfNotdeliveredOrders {
  total_orders_notDelivered: number,
  order_notDelivered_today: number,
  order_notDelivered_month: number,
  order_notDelivered_year:number
}

export interface numberOfDeliveredOrders{
  total_orders_delivered: number,
  order_delivered_today: number,
  order_delivered_month: number,
  order_delivered_year: number
}

export interface numberOfCanceledOrder{
  total_orders_canceled: number,
  order_canceled_today: number,
  order_canceled_month: number,
  order_canceled_year: number
}

export interface profit{
  total: number,
  total_today: number,
  total_month: number,
  total_year: number
}

export interface order{
  canceled:number,
created_at: string,
delivery_status:number,
id: number,
price:string,
product_id: number,
quantity:number ,
totalPrice:string,
updated_at:string,
user_id:number
}
