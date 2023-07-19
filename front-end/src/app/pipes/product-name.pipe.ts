import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productName'
})
export class ProductNamePipe implements PipeTransform {

  transform(products: any[] , searchTerm : string ): any[] {
    return products.filter((product)=> product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
