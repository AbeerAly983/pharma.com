import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderCoordinator, OrderCoordinatorStats } from 'src/app/interfaces/Owner/coordinator';
import { OrderCoordinatorService } from 'src/app/services/Owner/orderCoordinator.service';

@Component({
  selector: 'app-order-coordinators',
  templateUrl: './order-coordinators.component.html',
  styleUrls: ['./order-coordinators.component.css']
})
export class OrderCoordinatorsComponent {
  constructor( private OrderCoordinator_Service: OrderCoordinatorService, private router: Router ) { }
  OrderCoordinatorStats!: OrderCoordinatorStats;
  OrderCoordinatorAll: OrderCoordinator[] = [];
  OrderCoordinatorYear: OrderCoordinator[] = [];
  OrderCoordinatorMonth: OrderCoordinator[] = [];
  OrderCoordinatorDay: OrderCoordinator[] = [];


  getOrderCoordinatorStats() {
    this.OrderCoordinator_Service.showOrderCoordinatorStats().subscribe( ( data: any ) => {
      this.OrderCoordinatorStats = data;

    } )
  }
  getOrderCoordinatorAll() {
    this.OrderCoordinator_Service.showOrderCoordinatorAll().subscribe( ( data: any ) => {
      this.OrderCoordinatorAll = data;
    }  , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    })
  }
  getOrderCoordinatorYear() {
    this.OrderCoordinator_Service.showOrderCoordinatorYear().subscribe( ( data: any ) => {
      this.OrderCoordinatorYear = data;
    } , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }
  getOrderCoordinatorMonth() {
    this.OrderCoordinator_Service.showOrderCoordinatorMonth().subscribe( ( data: any ) => {
      this.OrderCoordinatorMonth = data;
    }  , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    })
  }
  getOrderCoordinatorDay() {
    this.OrderCoordinator_Service.showOrderCoordinatorDay().subscribe( ( data: any ) => {
      this.OrderCoordinatorDay = data;
    }  , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    })
  }

  ngOnInit(): void {
    this.getOrderCoordinatorStats();
    this.getOrderCoordinatorAll();
    this.getOrderCoordinatorYear();
    this.getOrderCoordinatorMonth();
    this.getOrderCoordinatorDay();
  }


  showAll: boolean = false;
  showToday: boolean = false;
  showMonth: boolean = false;
  showYear: boolean = false;
  showBack: boolean = false;


  // show div of all Coord
  showCoordAll() {
    this.showAll = true;
    this.showToday = false;
    this.showMonth = false;
    this.showYear = false;
    this.showBack = true;
  }

  // show div of Coord add in today
  showCoordToday() {
    this.showToday = true;
    this.showAll = false;
    this.showMonth = false;
    this.showYear = false;
    this.showBack = true;
  }

  // show div of Coord add in month
  showCoordMonth() {
    this.showMonth = true;
    this.showAll = false;
    this.showToday = false;
    this.showYear = false;
    this.showBack = true;
  }

  // show div of Coord add in year
  showCoordYear() {
    this.showYear = true;
    this.showAll = false;
    this.showToday = false;
    this.showMonth = false;
    this.showBack = true;
  }

}
