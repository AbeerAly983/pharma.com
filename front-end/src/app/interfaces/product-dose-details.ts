export interface ProductDoseDetails {
  message ?: string ,
  weight: string;
  product: {
    id: number;
    ProductName: string;
    composition: string ;
    pregnancy: string;
    lactation: string;
    more_trade_names: string;
    created_at: string;
    updated_at: string;
  };
  dose: {
    indication: string;
    dose: string;
  }[];
}
