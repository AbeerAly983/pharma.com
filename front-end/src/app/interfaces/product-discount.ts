export interface ProductDiscount {
      id: number,
      product_id: number,
      presentage_Discount: string,
      discount_price: string,
      created_at : string,
      updated_at: string,
      product: {
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
      type_id: 1,
      ingredients: string,
      brandCountry: string,
      company_name: string,
      characteristics: string,
      app_area: string,
      for_whom: string,
      purpose: string,
      production_date?: null,
      expiry_date?: null,
      disable: number,
      reorder_point: number,
      type: {
        id: number,
        type: string,
        photo: string,
        created_at: string,
        updated_at: string
        }
    }

}

