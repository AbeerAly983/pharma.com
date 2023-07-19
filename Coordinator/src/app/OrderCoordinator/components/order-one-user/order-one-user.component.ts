import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/Coordinator/orders.service';
import { ActivatedRoute } from '@angular/router';
import { OrderDetails } from 'src/app/interfaces/Coordinator/order-details';

@Component({
  selector: 'app-order-one-user',
  templateUrl: './order-one-user.component.html',
  styleUrls: ['./order-one-user.component.css']
})
export class OrderOneUserComponent implements OnInit {

  userId :string='' ;
  orderDetails! : OrderDetails

  constructor(private _OrdersService : OrdersService , private _ActivatedRoute : ActivatedRoute){}

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params :any)=>{
      this.userId = params.get('id') ;
    })
    this.getOrderDetails() ;
  }

  getOrderDetails(){
    this._OrdersService.getOrderDetails(this.userId).subscribe({
      next:(res : OrderDetails )=>{
        this.orderDetails = res ;
      } ,
      error:(err)=> console.log(err)
    })
  }

  shipAllOrders(){
    this._OrdersService.shipAllOrders(this.userId).subscribe({
      next:(res:string)=>{
        this.getOrderDetails()
      } ,
      error:(err)=> console.log(err)
    })
  }

  shipOneOrder(orderId :number){
    this._OrdersService.shipOneOrder(orderId).subscribe({
      next:(res:string)=>{
        this.getOrderDetails()
      } ,
      error:(err)=> console.log(err)
    })
  }

}
