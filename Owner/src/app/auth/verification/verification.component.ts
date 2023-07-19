import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Verification } from '../../interfaces/Owner/auth';



@Component( {
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css', '../login/login.component.css']
} )
export class VerificationComponent {

  verificationData: Verification = { otp: "", email: "" };
  email = {};
  verifyMsg: any;
  resend: boolean = false;
  inValid: boolean = false;
  constructor( private auth: AuthService, private router: Router ) { }

  onVerify() {

    let otpInputs = document.querySelectorAll<HTMLInputElement>( "#verifyContent .vr-con input" );
    this.verificationData.otp = "";
    for ( let index = 0; index < otpInputs.length; index++ ) {
      this.verificationData.otp = this.verificationData.otp + otpInputs[index].value;
    }
    this.verificationData.email = localStorage.getItem( 'email' );
    this.auth.verifyEmailAccount( this.verificationData ).subscribe( ( result ) => {
      console.log( result );
      this.verifyMsg = result;
      if ( this.verifyMsg.success == true ) {
        localStorage.removeItem( "email" );
        this.router.navigate( ['/login'] );
      }
      else {
        this.inValid = true;
        setTimeout( () => { this.inValid = false }, 3000 );
        for ( let index = 0; index < otpInputs.length; index++ ) {
          otpInputs[index].value = "";
        }
      }
    } );

  }

  ResendCode() {
    this.email = { email: localStorage.getItem( "email" ) };
    this.auth.resendCode( this.email ).subscribe( () => {
      // location.reload();
      this.resend = true;
      setTimeout( () => {
        this.resend = false;
      }, 1500 );
    } );
  }

  focusInput() {
    let vrInputs = Array.from( document.querySelectorAll<HTMLInputElement>( "#verifyContent .vr-con input" ) );
    vrInputs[0].focus();
    for ( let index = 0; index < vrInputs.length - 1; index++ ) {
      vrInputs[index].addEventListener( "input", () => {
        if ( vrInputs[index].value.length == 1 ) {
          vrInputs[index + 1].focus();
        }
      } );
    }
  }

  backLogin() {
    this.router.navigate( ['/login'] );
  }

  ngOnInit(): void {
    this.focusInput();
  }

}
