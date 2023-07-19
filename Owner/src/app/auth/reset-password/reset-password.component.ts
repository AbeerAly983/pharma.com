import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ResetPassword } from 'src/app/interfaces/Owner/auth';
import { User } from '../User';


@Component( {
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css', "../login/login.component.css"]
} )
export class ResetPasswordComponent {

  constructor( private auth: AuthService, private router: Router ) {

    if(!localStorage.getItem('email')){
      this.router.navigate( ['/forgetPassword'] );
    }
   }
  userModel = new User( "", "", "", "", "" );
  email = {};
  inValid: boolean = false;
  resend: boolean = false;
  resetResult: any;

  onReset( data: ResetPassword ) {
    let otpInputs = document.querySelectorAll<HTMLInputElement>( "#resetPassword .vr-con input" );
    // console.log( otpInputs );
    data.otp = ""
    data.email = localStorage.getItem( "email" );
    for ( let index = 0; index < otpInputs.length; index++ ) {
      data.otp = data.otp + otpInputs[index].value;
    }
    this.auth.resetPasswordAccount( data ).subscribe( ( result ) => {
      console.log( result );
      this.resetResult = result;
      if ( this.resetResult.sucess == true ) {
        localStorage.removeItem( "email" );
        this.router.navigate( ['/login'] );
      }
      else {
        this.inValid = true; //alert
        setTimeout( () => {
          this.inValid = false;
        }, 500 );
        for ( let index = 0; index < otpInputs.length; index++ ) {
          otpInputs[index].value = "";
        }
        this.focusInput();
      }
    } );

  }

  focusInput() {
    let otpInputs = Array.from( document.querySelectorAll<HTMLInputElement>( "#resetPassword .vr-con input" ) );
    for ( let index = 0; index < otpInputs.length - 1; index++ ) {
      otpInputs[0].focus();
      otpInputs[index].addEventListener( "input", () => {
        if ( otpInputs[index].value.length == 1 ) {
          otpInputs[index + 1].focus();
        }
      } );
    }
  }

  ResendCode() {
    this.ClearInputs();
    this.email = { email: localStorage.getItem( "email" ) };
    this.auth.resetPassword( this.email ).subscribe( () => {
      this.resend = true;
      setTimeout( () => {
        this.resend = false;
      }, 1500 );
    } );
  }

  ClearInputs() {
    let otpInputs = Array.from( document.querySelectorAll<HTMLInputElement>( "#resetPassword .input input" ) );
    for ( let index = 0; index < otpInputs.length; index++ ) {
      otpInputs[index].value = "";
    }
  }

  backLogin() {
    this.router.navigate( ['/login'] );
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

  ngOnInit(): void {
    this.focusInput();
  }
}
