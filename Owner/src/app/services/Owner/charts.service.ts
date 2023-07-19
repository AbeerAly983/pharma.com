import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/owner';

@Injectable( {
  providedIn: 'root'
} )
export class ChartsService {

  constructor( private _HttpClient: HttpClient ) { }

  getYearSales(): Observable<any> {
    return this._HttpClient.get<any>( environment.baseUrl + '/lastYear_sales' )
  }

  getYearOrders(): Observable<any> {
    return this._HttpClient.get<any>( environment.baseUrl + '/lastYear_orders' )
  }

  getYearUsers(): Observable<any> {
    return this._HttpClient.get<any>( environment.baseUrl + '/lastYear_users' )
  }

  getTopOrder(): Observable<any> {
    return this._HttpClient.get<any>( environment.baseUrl + '/topOrder' )
  }

  getTopSales(): Observable<any> {
    return this._HttpClient.get<any>( environment.baseUrl + '/topSales' )
  }

  getTopCanceled(): Observable<any> {
    return this._HttpClient.get<any>( environment.baseUrl + '/topCanceled' )
  }

  getTopPending(): Observable<any> {
    return this._HttpClient.get<any>( environment.baseUrl + '/topPending' )
  }


}
