import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable( {
  providedIn: 'root'
} )
export class CanceledOrderService {

  constructor( private http: HttpClient ) { }


  getTotalNumbersOfCanceledOrders() {


    return this.http.get( "http://127.0.0.1:8000/api/owner/Canceled", {} );
  }

  getAllCanceledOrders() {


    return this.http.get( "http://127.0.0.1:8000/api/owner/Canceled/all", {} );
  }
  getAllCanceledOrdersToday() {


    return this.http.get( "http://127.0.0.1:8000/api/owner/Canceled/today", {} );
  }
  getAllCanceledOrdersMonth() {


    return this.http.get( "http://127.0.0.1:8000/api/owner/Canceled/month", {} );
  }
  getAllCanceledOrdersYear() {


    return this.http.get( "http://127.0.0.1:8000/api/owner/Canceled/year", {} );
  }

}

