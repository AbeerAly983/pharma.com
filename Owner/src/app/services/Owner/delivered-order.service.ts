import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable( {
  providedIn: 'root'
} )
export class DeliveredOrderService {

  constructor( private http: HttpClient ) { }


  getTotalNumbersOfDeliveredOrders() {
    const token = localStorage.getItem( 'access_token' );
    const headers = new HttpHeaders().set( 'Authorization', `Bearer ${token}` );
    return this.http.get( "http://127.0.0.1:8000/api/owner/Delivered", { headers } );
  }

  getAllDeliveredOrders() {
    const token = localStorage.getItem( 'access_token' );
    const headers = new HttpHeaders().set( 'Authorization', `Bearer ${token}` );
    return this.http.get( "http://127.0.0.1:8000/api/owner/Delivered/all", { headers } );
  }
  getAllDeliveredOrdersToday() {
    const token = localStorage.getItem( 'access_token' );
    const headers = new HttpHeaders().set( 'Authorization', `Bearer ${token}` );
    return this.http.get( "http://127.0.0.1:8000/api/owner/Delivered/today", { headers } );
  }
  getAllDeliveredOrdersMonth() {
    const token = localStorage.getItem( 'access_token' );
    const headers = new HttpHeaders().set( 'Authorization', `Bearer ${token}` );
    return this.http.get( "http://127.0.0.1:8000/api/owner/Delivered/month", { headers } );
  }
  getAllDeliveredOrdersYear() {
    const token = localStorage.getItem( 'access_token' );
    const headers = new HttpHeaders().set( 'Authorization', `Bearer ${token}` );
    return this.http.get( "http://127.0.0.1:8000/api/owner/Delivered/year", { headers } );
  }
 getAllOrdersTotal() {

    return this.http.get( "http://127.0.0.1:8000/api/owner/total", {} );
  }


}

