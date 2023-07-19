import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/User';
import { Accountant } from 'src/app/interfaces/Admin/accountant';
import { AccountantService } from 'src/app/services/Admin/accountant.service';

@Component( {
  selector: 'app-add-accountant',
  templateUrl: './add-accountant.component.html',
  styleUrls: ['./add-accountant.component.css']
} )
export class AddAccountantComponent {

  constructor( private AccountantService: AccountantService, private router: Router ) { }

  responseMsg: any;
  valid: boolean = false;
  userModel = new User( "", "", "", "", "" );

  // send updating data
  onsubmit( data: Accountant ) {
    this.AccountantService.addAccountant( data ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.message == 'added new accountant' ) {
        this.valid = true;
        setTimeout( () => { this.valid = false; }, 2000 );
        this.clearData();
      }
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    }
    );
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
