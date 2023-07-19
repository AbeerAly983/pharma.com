import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import {  Observable } from 'rxjs';
import {ProductDetails}from '../interfaces/product-details'
import {ProductDiscount}from '../interfaces/product-discount'
import {Product}from '../interfaces/product'


@Injectable({
  providedIn: 'root',
})
export class SliderService {
  constructor(private http: HttpClient) {}

  getdiscounts(): Observable<ProductDiscount> {
    return this.http.get<ProductDiscount>(environment.baseUrl+'/discounts');
  }
  getProduct(): Observable<Product> {
    return this.http.get<Product>(environment.baseUrl+'/products');
  }
  getNew(): Observable<Product> {
    return this.http.get<Product>(environment.baseUrl+'/newProducts');
  }
  getProductById(id: string | null): Observable<ProductDetails> {
    return this.http.get<ProductDetails>(environment.baseUrl+'/products/show/' + id);
  }

}


