import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Coordinator } from 'src/app/interfaces/Admin/coordinator';
import { CoordinatorService } from 'src/app/services/Admin/coordinator.service';

@Component( {
  selector: 'app-order-coordinator',
  templateUrl: './order-coordinator.component.html',
  styleUrls: ['./order-coordinator.component.css']
} )
export class OrderCoordinatorComponent {

  coordinators: Coordinator[] = [];
  valid: boolean = false;
  responseMsg: any;

  constructor( private router: Router, private coordinator_service: CoordinatorService ) { }

  ngOnInit(): void {
    this.getAllOrderCoordinator();
  }

  getAllOrderCoordinator() {
    this.coordinators = [];
    this.coordinator_service.showCoordinators().subscribe( ( data: any ) => {
      this.coordinators = data;

    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } );
  }

  enable( id: any ) {
    this.coordinator_service.enableCoordinator( id, this.coordinators ).subscribe( ( data ) => {
      this.responseMsg = data
      if ( this.responseMsg.success == true ) {
      }
      this.getAllOrderCoordinator();
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } )
  }

  disable( id: any ) {
    this.coordinator_service.disableCoordinator( id, this.coordinators ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.success == true ) {
      }
      this.getAllOrderCoordinator();
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      }
    )
  }


}
