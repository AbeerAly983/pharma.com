import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable( {
  providedIn: 'root'
} )
export class ProductService {

  constructor( private http: HttpClient ) { }


  getTotalNumbersOfProducts() {


    return this.http.get( "http://127.0.0.1:8000/api/owner/products", {} );
  }

  getAllProducts() {


    return this.http.get( "http://127.0.0.1:8000/api/owner/products/all", {} );
  }
  getAllProductsToday() {


    return this.http.get( "http://127.0.0.1:8000/api/owner/products/today", {} );
  }
  getAllProductsMonth() {


    return this.http.get( "http://127.0.0.1:8000/api/owner/products/month", {} );
  }
  getAllProductsYear() {


    return this.http.get( "http://127.0.0.1:8000/api/owner/products/year", {} );
  }


}
