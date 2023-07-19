import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, map } from 'rxjs';
import { environment } from 'src/environments/coordinator';
import { Product } from 'src/app/interfaces/Admin/product_type';

@Injectable( {
  providedIn: 'root',
} )
export class ProductService {
  constructor( private http: HttpClient ) { }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>( environment.baseUrl + '/products/showAll', {} );
  }

  getProductById( id: number ): Observable<Product> {
    return this.http.get<Product>( environment.baseUrl + `/product/edit/${id} `, {} );
  }



  addProduct( product: any ): Observable<Product> {
    return this.http.post<Product>( environment.baseUrl + "/products/store", product, {} )
  }

  editProduct( id: any, product: any ): Observable<Product> {
    return this.http.post<Product>( environment.baseUrl + `/products/update/${id}`, product, {} )
  }




  deleteProduct( id: any ): Observable<Product> {
    return this.http.get<Product>( environment.baseUrl + `/products/disable/${id}`, {} );
  }

}
