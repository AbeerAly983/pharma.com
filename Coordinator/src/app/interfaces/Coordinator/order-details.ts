export interface OrderDetails {
    "data": [
        {
          order_id: number,
          product_name: string,
          qrCode: number,
          photo: string,
          quantity: number,
          price: string
        }
    ],
    total: string
}
