import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable( {
  providedIn: 'root'
} )
export class NotdeliveredOrderService {

  constructor( private http: HttpClient ) { }


  getTotalNumbersOfNotDeliveredOrders() {


    return this.http.get( "http://127.0.0.1:8000/api/owner/NotDelivereds", {} );
  }

  getAllNotDeliveredOrders() {


    return this.http.get( "http://127.0.0.1:8000/api/owner/NotDelivereds/all", {} );
  }
  getAllNotDeliveredOrdersToday() {


    return this.http.get( "http://127.0.0.1:8000/api/owner/NotDelivereds/today", {} );
  }
  getAllNotDeliveredOrdersMonth() {


    return this.http.get( "http://127.0.0.1:8000/api/owner/NotDelivereds/month", {} );
  }
  getAllNotDeliveredOrdersYear() {


    return this.http.get( "http://127.0.0.1:8000/api/owner/NotDelivereds/year", {} );
  }

}
