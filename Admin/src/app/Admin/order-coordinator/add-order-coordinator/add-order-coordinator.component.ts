import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/User';
import { Coordinator } from 'src/app/interfaces/Admin/coordinator';
import { CoordinatorService } from 'src/app/services/Admin/coordinator.service';

@Component( {
  selector: 'app-add-order-coordinator',
  templateUrl: './add-order-coordinator.component.html',
  styleUrls: ['./add-order-coordinator.component.css']
} )
export class AddOrderCoordinatorComponent {

  constructor( private coordinatorService: CoordinatorService, private router: Router ) { }

  responseMsg: any;
  valid: boolean = false;
  userModel = new User( "", "", "", "", "" );


  // send updating data
  onsubmit( data: Coordinator ) {
    this.coordinatorService.addCoordinator( data ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.message == 'added new order coordinator' ) {
        this.valid = true;
        setTimeout( () => { this.valid = false; }, 2000 );
        this.clearData();
      }
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } );
  }


  clearData() {
    let Inputs = document.querySelectorAll<HTMLInputElement>( ".mb-3 input" );
    for ( let index = 0; index < Inputs.length; index++ ) {
      Inputs[0].focus();
      Inputs[index].value = "";
    }
  }


  // show & hide password
  showPassword = false;
  showRepeatPassword = false;
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  toggleShowRepeatPassword() {
    this.showRepeatPassword = !this.showRepeatPassword;
  }

}
