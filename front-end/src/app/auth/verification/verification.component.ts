import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Verification } from '../../interfaces/auth';



@Component( {
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css', '../login/login.component.css']
} )
export class VerificationComponent {

  // otp = "";

  verificationData: Verification = { otp: "", email: "" };

  verifyMsg: any;

  inValid: boolean = false;
  loading: boolean = false; // add loading variable

  constructor( private auth: AuthService, private router: Router ) { }

  onVerify() {
    this.loading = true; // set loading variable to true

    let otpInputs = document.querySelectorAll<HTMLInputElement>( "#verifyContent .vr-con input" );
    this.verificationData.otp = "";
    for ( let index = 0; index < otpInputs.length; index++ ) {
      this.verificationData.otp = this.verificationData.otp + otpInputs[index].value;
    }

    this.verificationData.email = localStorage.getItem( "email" );

    this.auth.verifyEmail( this.verificationData ).subscribe( ( result ) => {
      this.verifyMsg = result;
      if ( this.verifyMsg == true ) {
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
      this.loading = false; // set loading variable to false after the function is done

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

  backSignup() {
    this.router.navigate( ['/signup'] );
  }

  ngOnInit(): void {
    this.focusInput();
      const email = localStorage.getItem('email');
    if (!email) {
      this.router.navigate(['/login']);
    }
  }

}
