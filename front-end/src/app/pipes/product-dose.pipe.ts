import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productDose'
})
export class ProductDosePipe implements PipeTransform {

  transform(products: any[] , searchTerm : string ): any[] {
    return products.filter((product)=> product.ProductName.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
