import { Component, OnInit } from '@angular/core';
import { error } from 'highcharts';
import { OrdersService } from 'src/app/services/Coordinator/orders.service';
import { AllShippedOrders } from 'src/app/interfaces/Coordinator/all-shipped-orders';

@Component( {
  selector: 'app-shipped-orders',
  templateUrl: './shipped-orders.component.html',
  styleUrls: ['./shipped-orders.component.css']
} )
export class ShippedOrdersComponent implements OnInit {
  allShippedOrders: AllShippedOrders[] = [];

  constructor( private _OrdersService: OrdersService ) { }

  ngOnInit(): void {
    this.getShippedOrders();
  }

  getShippedOrders() {
    this._OrdersService.getShippedOrders().subscribe( {
      next: ( res: AllShippedOrders[] ) => {
        this.allShippedOrders = res;
      },
      error: ( err ) => console.log( error )
    } )
  }

}
