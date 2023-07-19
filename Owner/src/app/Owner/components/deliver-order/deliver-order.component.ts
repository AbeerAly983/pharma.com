import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { numberOfDeliveredOrders, order, profit } from 'src/app/interfaces/Owner/order';
import { DeliveredOrderService } from 'src/app/services/Owner/delivered-order.service';

@Component({
  selector: 'app-deliver-order',
  templateUrl: './deliver-order.component.html',
  styleUrls: ['./deliver-order.component.css']
})
export class DeliverOrderComponent {
  showAll: boolean = false;
  showToday: boolean = false;
  showMonth: boolean = false;
  showYear: boolean = false;
  showBack: boolean = false;
  allDeliveredOrders:order[]=[]
  orderDeliveredToday:order[]=[]
  orderDeliveredMonth:order[]=[]
  orderDeliveredYear:order[]=[]
  numberOfOrdersDelivered!:numberOfDeliveredOrders
  orderTotal!:profit
constructor(private service:DeliveredOrderService,private router: Router){}
  // show div of all Orders
  showOrdersAll() {
    this.showAll = true;
    this.showToday = false;
    this.showMonth = false;
    this.showYear = false;
    this.showBack = true;
  }

  // show div of Orders add in today
  showOrdersToday() {
    this.showToday = true;
    this.showAll = false;
    this.showMonth = false;
    this.showYear = false;
    this.showBack = true;
  }

  // show div of Orders add in month
  showOrdersMonth() {
    this.showMonth = true;
    this.showAll = false;
    this.showToday = false;
    this.showYear = false;
    this.showBack = true;
  }

  // show div of Orders add in year
  showOrdersYear() {
    this.showYear = true;
    this.showAll = false;
    this.showToday = false;
    this.showMonth = false;
    this.showBack = true;
  }

  ngOnInit(): void {
    this.getTotalNumbersOfDeliveredOrders()
    this.getAllDeliveredOrders()
    this.getAllDeliveredOrdersToday(),
    this.getAllDeliveredOrdersMonth(),
    this.getAllDeliveredOrdersYear()
    this.getAllOrdersTotal()
  }
    getAllOrdersTotal(){
    this.service.getAllOrdersTotal().subscribe((data:any)=>{
      this.orderTotal=data
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    })
  }

  getTotalNumbersOfDeliveredOrders() {
    this.service.getTotalNumbersOfDeliveredOrders().subscribe( ( data: any ) => {
      this.numberOfOrdersDelivered = data;
    } , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } );
  }

  getAllDeliveredOrders(){
    this.service.getAllDeliveredOrders().subscribe((data:any)=>{
      this.allDeliveredOrders=data
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } );
  }
  getAllDeliveredOrdersToday(){
    this.service.getAllDeliveredOrdersToday().subscribe((data:any)=>{
      this.orderDeliveredToday=data
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } );
  }
  getAllDeliveredOrdersMonth(){
    this.service.getAllDeliveredOrdersMonth().subscribe((data:any)=>{
      this.orderDeliveredMonth=data
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } );
  }
  getAllDeliveredOrdersYear(){
    this.service.getAllDeliveredOrdersYear().subscribe((data:any)=>{
      this.orderDeliveredYear=data
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } );
  }

}
