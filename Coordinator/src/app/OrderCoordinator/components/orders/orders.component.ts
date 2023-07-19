import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/Coordinator/orders.service';
import { Users } from 'src/app/interfaces/Coordinator/users';
import { AllOrders } from 'src/app/interfaces/Coordinator/all-orders';

@Component( {
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
} )
export class OrdersComponent implements OnInit {
  allOrders: AllOrders[] = [];

  constructor( private _OrdersService: OrdersService ) { }

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders() {
    this._OrdersService.getOrders().subscribe( {
      next: ( res: AllOrders[] ) => {
        this.allOrders = res;
      },
      error: ( err ) => console.log( err )
    } )
  }

  shipOrders() {
    this._OrdersService.shipOrders().subscribe( {
      next: ( res: string ) => {
        this.getAllOrders()
      },
      error: ( err ) => console.log( err )
    } )
  }

  shipOneOrder( orderId: number ) {
    this._OrdersService.shipOneOrder( orderId ).subscribe( {
      next: ( res: string ) => {
        this.getAllOrders()
      },
      error: ( err ) => console.log( err )
    } )
  }

}
