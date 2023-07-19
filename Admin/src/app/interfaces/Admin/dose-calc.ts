export interface DoseCalc {
  id:number,
  ProductName:string,
  composition:string,
  pregnancy:string,
  lactation:string,
  more_trade_names:string
  created_at:string,
  updated_at:string,
}

export interface indication{
  id: number;
  product_id:number|any,
  indication:string,
  created_at:string,
  updated_at:string,
}

export interface dose_of_products{
  id:number,
  indication_id:number|any,
  min_age:number|any,
  max_age:number|any,
  min_weight:number|any,
  max_weight:number|any,
  dose:string,
  created_at:string,
  updated_at:string,
}
export interface calculator{
  id:number,
  indication:string,
  indication_id:number,
  doses:any|{
    id:number,
    indication_id:number|any,
    min_age:number|any,
    max_age:number|any,
    min_weight:number|any,
    max_weight:number|any,
    dose:string,
    created_at:string,
    updated_at:string,
  }

}
