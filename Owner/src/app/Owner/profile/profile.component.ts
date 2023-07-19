import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/User';
import { Verification } from 'src/app/interfaces/Owner/auth';
import { Owner, OwnerShortData, updateEmail, updatePassword } from 'src/app/interfaces/Owner/owner';
import { OwnerService } from 'src/app/services/Owner/owner.service';


@Component( {
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
} )
export class ProfileComponent {
  userModel = new User( "", "", "", "", "" );

  user!: Owner;
  userShortData!: OwnerShortData;
  responseMsg: any;

  showEditPass: boolean = false;
  showEditEmail: boolean = false;
  showVerification: boolean = false;
  showEditProfile: boolean = true;
  showBack: boolean = false;

  valid: boolean = false;
  inValid: boolean = false;
  exist: boolean = false;

  verificationData: Verification = { otp: "", email: "" };
  dataEmail!: updateEmail;

  constructor( private ownerService: OwnerService, private router: Router ) { }

  getUser() {
    this.ownerService.getUser().subscribe( ( data: any ) => {
      this.user = data
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } );
  }
  getUserShortData() {
    this.ownerService.getUser().subscribe( ( data: any ) => {
      this.userShortData = data
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } );
  }



  // send updating data
  onsubmit( data: Owner ) {
    const formData = new FormData();
    formData.append( 'first_name', data.first_name );
    formData.append( 'last_name', data.last_name );
    this.ownerService.postUpdateUser( formData ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.message == "updated" ) {

        this.valid = true;
        setTimeout( () => {
          this.valid = false;
          location.reload();
        }, 2000 );
      }
    }, ( error ) => {
      console.log( error );

      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } );

  }


  // send new password
  onsubmitPass( data: updatePassword ) {
    data.email = this.user.email;
    this.ownerService.postUpdatePass( data ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.message == "password updated" ) {
        this.valid = true;
        setTimeout( () => {
          this.valid = false;
          this.router.navigateByUrl( '/', { skipLocationChange: true } ).then( () => {
            this.router.navigate( ['/orderCoordinator/profile'] );
          } );
        }, 2000 );
      }
      else if ( this.responseMsg.error == "password isn't correct" ) {
        this.inValid = true;
        setTimeout( () => {
          this.inValid = false;
        }, 2000 );
      }
      this.clearData();
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } );
  }


  // send new email
  onsubmitEmail( data: updateEmail ) {
    this.dataEmail = data;
    localStorage.setItem( 'email', data.email );
    this.ownerService.postUpdateEmail( data ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg == null ) {
        this.showVerification = true;
        this.showEditEmail = false;
        // this.focusInput();
      }

    }, ( error ) => {
      if ( error.status == 422 ) {
        this.inValid = true;
        setTimeout( () => {
          this.inValid = false;
        }, 2000 );
      }
    } );
  }


  // verify email with otp
  onVerify() {
    let otpInputs = document.querySelectorAll<HTMLInputElement>( ".vrf-input input" );
    this.verificationData.otp = "";
    for ( let index = 0; index < otpInputs.length; index++ ) {
      this.verificationData.otp = this.verificationData.otp + otpInputs[index].value;
    }
    console.log( this.verificationData.otp );
    this.verificationData.email = localStorage.getItem( 'email' );
    this.ownerService.verifyEmail( this.verificationData ).subscribe( ( result ) => {

      this.responseMsg = result;
      if ( this.responseMsg.sucess == true ) {
        localStorage.removeItem( "email" );
        this.valid = true;
        setTimeout( () => {
          this.valid = false;
          this.router.navigateByUrl( '/', { skipLocationChange: true } ).then( () => {
            this.router.navigate( ['/orderCoordinator/profile'] );
          } );
        }, 1500 );
      }
      else {
        this.inValid = true;
        setTimeout( () => {
          this.inValid = false;
        }, 2000 );
        for ( let index = 0; index < otpInputs.length; index++ ) {
          otpInputs[index].value = "";
        }
        this.focusInput();
      }
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } );
  }


  // resend code with email
  resendEmail() {
    let otpInputs = document.querySelectorAll<HTMLInputElement>( ".vrf-input input" );
    // clear data input
    for ( let index = 0; index < otpInputs.length; index++ ) {
      otpInputs[index].value = "";
    }
    this.ownerService.resendEmail( this.dataEmail ).subscribe( ( result ) => {
      this.responseMsg = result;
      if ( this.responseMsg == null ) {
        this.exist = true;
        setTimeout( () => { this.exist = false; }, 2000 );
      }

    } );
  }

  focusInput() {
    let vrInputs = document.querySelectorAll<HTMLInputElement>( ".vrf-input input" );
    

    vrInputs[0].focus();
    for ( let index = 0; index < vrInputs.length - 1; index++ ) {
      vrInputs[index].addEventListener( "input", () => {
        if ( vrInputs[index].value.length == 1 ) {
          vrInputs[index + 1].focus();
        }
      } );
    }
  }

  // show div of edit email
  showEmail() {
    this.showEditEmail = true;
    this.showVerification = false;
    this.showEditPass = false;
    this.showEditProfile = false;
    this.showBack = true;
  }

  // show div of edit password
  showPass() {
    this.showEditPass = true;
    this.showEditEmail = false;
    this.showVerification = false;
    this.showEditProfile = false;
    this.showBack = true;
  }

  // show div of edit profile
  showProfile() {
    this.showEditProfile = true;
    this.showEditPass = false;
    this.showEditEmail = false;
    this.showVerification = false;
    this.showBack = false;
  }


  // clear data of inputs in password div
  clearData() {
    let inputs = document.querySelectorAll<HTMLInputElement>( ".update-pass .input" );
    for ( let i = 0; i < inputs.length; i++ ) {
      inputs[0].focus();
      inputs[i].value = "";

    }
    console.log( inputs );
  }


  // show & hide password
  showPassword = false;
  showNewPassword = false;
  showRepeatPassword = false;
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  toggleShowNewPassword() {
    this.showNewPassword = !this.showNewPassword;
  }
  toggleShowRepeatPassword() {
    this.showRepeatPassword = !this.showRepeatPassword;
  }


  ngOnInit() {
    this.getUser();
    this.getUserShortData();

  }
}
