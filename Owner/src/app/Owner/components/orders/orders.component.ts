import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { numberOfOrders, order, profit } from 'src/app/interfaces/Owner/order';
import { OrderService } from 'src/app/services/Owner/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  showAll: boolean = false;
  showToday: boolean = false;
  showMonth: boolean = false;
  showYear: boolean = false;
  showBack: boolean = false;
  allOrders:order[]=[]
  orderToday:order[]=[]
  orderMonth:order[]=[]
  orderYear:order[]=[]

  numberOfOrders!:numberOfOrders
constructor(private service:OrderService,private router: Router){}
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
    this.getTotalNumbersOfOrders()
    this.getAllOrders()
    this.getAllOrdersToday(),
    this.getAllOrdersMonth(),
    this.getAllOrdersYear()
  }

  getTotalNumbersOfOrders() {
    this.service.getTotalNumbersOfOrders().subscribe( ( data: any ) => {
      this.numberOfOrders = data;
    } , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    });
  }

  getAllOrders(){
    this.service.getAllOrders().subscribe((data:any)=>{
      this.allOrders=data
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    })
  }
  getAllOrdersToday(){
    this.service.getAllOrdersToday().subscribe((data:any)=>{
      this.orderToday=data
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    })
  }
  getAllOrdersMonth(){
    this.service.getAllOrdersMonth().subscribe((data:any)=>{
      this.orderMonth=data
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    })
  }
  getAllOrdersYear(){
    this.service.getAllOrdersYear().subscribe((data:any)=>{
      this.orderYear=data
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    })
  }


}
