import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { numberOfNotdeliveredOrders, order } from 'src/app/interfaces/Owner/order';
import { NotdeliveredOrderService } from 'src/app/services/Owner/notdelivered-order.service';

@Component({
  selector: 'app-notdelivered-order',
  templateUrl: './notdelivered-order.component.html',
  styleUrls: ['./notdelivered-order.component.css','../deliver-order/deliver-order.component.css']
})
export class NotdeliveredOrderComponent {
  showAll: boolean = false;
  showToday: boolean = false;
  showMonth: boolean = false;
  showYear: boolean = false;
  showBack: boolean = false;
  allNotDeliveredOrders:order[]=[]
  orderNotDeliveredToday:order[]=[]
  orderNotDeliveredMonth:order[]=[]
  orderNotDeliveredYear:order[]=[]
  numberOfNotDeliveredOrder!:numberOfNotdeliveredOrders
constructor(private service:NotdeliveredOrderService,private router: Router){}
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
    this.getTotalNumbersOfNotDeliveredOrders()
    this.getAllNotDeliveredOrders()
    this.getAllNotDeliveredOrdersToday(),
    this.getAllNotDeliveredOrdersMonth(),
    this.getAllNotDeliveredOrdersYear()
    //this.getAllOrdersTotal()
  }

  getTotalNumbersOfNotDeliveredOrders() {
    this.service.getTotalNumbersOfNotDeliveredOrders().subscribe( ( data: any ) => {
      this.numberOfNotDeliveredOrder = data;
    } , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    });
  }

  getAllNotDeliveredOrders(){
    this.service.getAllNotDeliveredOrders().subscribe((data:any)=>{
      this.allNotDeliveredOrders=data
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    })
  }
  getAllNotDeliveredOrdersToday(){
    this.service.getAllNotDeliveredOrdersToday().subscribe((data:any)=>{
      this.orderNotDeliveredToday=data
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    })
  }
  getAllNotDeliveredOrdersMonth(){
    this.service.getAllNotDeliveredOrdersMonth().subscribe((data:any)=>{
      this.orderNotDeliveredMonth=data
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    })
  }
  getAllNotDeliveredOrdersYear(){
    this.service.getAllNotDeliveredOrdersYear().subscribe((data:any)=>{
      this.orderNotDeliveredYear=data
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    })
  }

}
