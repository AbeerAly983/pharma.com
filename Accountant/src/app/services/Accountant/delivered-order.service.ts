import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersAcc } from 'src/app/interfaces/Accountant/orders-acc';
import { environment } from 'src/environments/coordinator';

@Injectable( {
  providedIn: 'root'
} )
export class DeliveredOrderService {

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {

  }

  getDeliveredOrders(): Observable<OrdersAcc[]> {
    return this.http.get<OrdersAcc[]>( environment.baseUrl + '/show_deliveredOrders', {} );
  }
}
