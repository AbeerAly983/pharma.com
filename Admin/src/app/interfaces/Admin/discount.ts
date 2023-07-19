
export interface DiscountProduct {
    id: string;
    product_id: string;
    presentage_Discount: string;
    discount_price: string;
    created_at: string;
    updated_at: string;
    product: {
        id: string;
        qrCode: number;
        name: string;
        price: string;
    };
}
