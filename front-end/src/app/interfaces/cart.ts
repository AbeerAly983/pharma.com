export interface Cart {
  data: [
        {
          id: number,
          name: string,
          price: string,
          price_before_discount: string,
          presentage: string,
          quantity: number,
          image: string,
          production: string
        }
    ],
    total: string,
    numOfCartItems: number
  }

  export interface deleteCart {
    message: string,
    numOfCartItems: number
  }
