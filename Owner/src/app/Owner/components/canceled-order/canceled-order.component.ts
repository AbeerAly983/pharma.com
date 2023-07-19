import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { numberOfCanceledOrder, order } from 'src/app/interfaces/Owner/order';
import { CanceledOrderService } from 'src/app/services/Owner/canceled-order.service';

@Component({
  selector: 'app-canceled-order',
  templateUrl: './canceled-order.component.html',
  styleUrls: ['./canceled-order.component.css']
})
export class CanceledOrderComponent {
  showAll: boolean = false;
  showToday: boolean = false;
  showMonth: boolean = false;
  showYear: boolean = false;
  showBack: boolean = false;
  allCanceledOrders:order[]=[]
  canceledOrderToday:order[]=[]
  canceledOrderMonth:order[]=[]
  canceledOrderYear:order[]=[]
  numberOfCanceledOrder!:numberOfCanceledOrder
constructor(private service:CanceledOrderService,private router: Router){}
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
    this.getTotalNumbersOfCanceledOrders()
    this.getAllCanceledOrders()
    this.getAllCanceledOrdersToday(),
    this.getAllCanceledOrdersMonth(),
    this.getAllCanceledOrdersYear()
    //this.getAllOrdersTotal()
  }

  getTotalNumbersOfCanceledOrders() {
    this.service.getTotalNumbersOfCanceledOrders().subscribe( ( data: any ) => {
      this.numberOfCanceledOrder = data;
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } );
  }

  getAllCanceledOrders(){
    this.service.getAllCanceledOrders().subscribe((data:any)=>{
      this.allCanceledOrders=data
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    })
  }
  getAllCanceledOrdersToday(){
    this.service.getAllCanceledOrdersToday().subscribe((data:any)=>{
      this.canceledOrderToday=data
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    })
  }
  getAllCanceledOrdersMonth(){
    this.service.getAllCanceledOrdersMonth().subscribe((data:any)=>{
      this.canceledOrderMonth=data
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    })
  }
  getAllCanceledOrdersYear(){
    this.service.getAllCanceledOrdersYear().subscribe((data:any)=>{
      this.canceledOrderYear=data
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    })
  }

}
