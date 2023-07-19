import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/coordinator';
import { Users } from 'src/app/interfaces/Coordinator/users';
import { OrderDetails } from 'src/app/interfaces/Coordinator/order-details';
import { AllOrders } from 'src/app/interfaces/Coordinator/all-orders';
import { AllShippedOrders } from 'src/app/interfaces/Coordinator/all-shipped-orders';

@Injectable( {
  providedIn: 'root'
} )
export class OrdersService implements OnInit {

  constructor( private _HttpClient: HttpClient ) { }


  getUsers(): Observable<Users[]> {
    return this._HttpClient.get<Users[]>( environment.baseUrl + `/show_users` )
  }

  getOrderDetails( userId: string ): Observable<OrderDetails> {
    return this._HttpClient.get<OrderDetails>( environment.baseUrl + `/show_orders/${userId}` )
  }

  getOrders(): Observable<AllOrders[]> {
    return this._HttpClient.get<AllOrders[]>( environment.baseUrl + `/show_orders_not_left` )
  }

  // all orders by user_id
  shipAllOrders( userId: string ): Observable<string> {
    return this._HttpClient.post<string>( environment.baseUrl + `/do_left_for_all_orders/${userId}`, {} )
  }

  // all orders
  shipOrders(): Observable<string> {
    return this._HttpClient.post<string>( environment.baseUrl + `/do_shipped_for_orders`, {} )
  }

  shipOneOrder( orderId: number ): Observable<string> {
    return this._HttpClient.post<string>( environment.baseUrl + `/do_left_for_order/${orderId}`, {} )
  }

  getShippedOrders(): Observable<AllShippedOrders[]> {
    return this._HttpClient.get<AllShippedOrders[]>( environment.baseUrl + `/show_orders_left` )
  }

  ngOnInit(): void { }

}
