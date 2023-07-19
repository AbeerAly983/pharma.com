import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable( {
  providedIn: 'root'
} )
export class OrderService {

  constructor( private http: HttpClient ) { }


  getTotalNumbersOfOrders() {


    return this.http.get( "http://127.0.0.1:8000/api/owner/orders", {} );
  }

  getAllOrders() {


    return this.http.get( "http://127.0.0.1:8000/api/owner/orders/all", {} );
  }
  getAllOrdersToday() {


    return this.http.get( "http://127.0.0.1:8000/api/owner/orders/today", {} );
  }
  getAllOrdersMonth() {


    return this.http.get( "http://127.0.0.1:8000/api/owner/orders/month", {} );
  }
  getAllOrdersYear() {


    return this.http.get( "http://127.0.0.1:8000/api/owner/orders/year", {} );
  }


}
