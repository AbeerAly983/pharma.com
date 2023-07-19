import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersAcc } from 'src/app/interfaces/Accountant/orders-acc';
import { environment } from 'src/environments/coordinator';

@Injectable( {
  providedIn: 'root'
} )
export class PindingOrderService {
  userToken: any = localStorage.getItem( 'access_token' );
  constructor( private http: HttpClient ) { }

  ngOnInit(): void {

  }

  getPindingOrder(): Observable<OrdersAcc[]> {
    return this.http.get<OrdersAcc[]>( environment.baseUrl + '/show_notDeliveredOrders', {} );
  }

  PostDeliveredOrder( id: number, data: any ): Observable<string> {
    return this.http.post<string>( environment.baseUrl + `/making_order_delivered/${id}`, data, {} );
  }

  PostCancelOrder( id: number, data: any ): Observable<string> {
    return this.http.post<string>( environment.baseUrl + `/making_order_canceled/${id}`, data, {} );
  }

  PostCancelQuant( id: any, data: any ): Observable<string> {
    return this.http.post<string>( environment.baseUrl + `/canceled_forSomeQuantities/${id}`, data, {} );
  }
}
