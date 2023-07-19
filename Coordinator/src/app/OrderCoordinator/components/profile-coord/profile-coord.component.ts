import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/Coordinator/User';
import { CoordinatorShortData, updateEmail, updatePassword } from 'src/app/interfaces/Coordinator/coordinator';
import { Verification } from 'src/app/interfaces/Coordinator/auth';
import { Coordinator } from 'src/app/interfaces/Coordinator/coordinator';
import { UserService } from 'src/app/services/Coordinator/user.service';

@Component( {
  selector: 'app-profile-coord',
  templateUrl: './profile-coord.component.html',
  styleUrls: ['./profile-coord.component.css']
} )
export class ProfileCoordComponent {
  userModel = new User( "", "", "", "", "" );

  user!: Coordinator;
  userShortData!: CoordinatorShortData;
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

  constructor( private userService: UserService, private router: Router ) {
    if(!localStorage.getItem('access_token') ){
      this.router.navigate(['/login'])
    }
  }


  selectedPhoto: Blob | undefined;

  onPhotoSelected( event: Event ) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];
    if ( file ) {
      this.selectedPhoto = file;
      console.log( event );
    }
  }


  getUser() {
    this.userService.getUser().subscribe( ( data: any ) => {
      this.user = data
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } );
  }

  getUserShortData() {
    this.userService.getUser().subscribe( ( data: any ) => {
      this.userShortData = data
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } );
  }

  // send updating data
  onsubmit( data: Coordinator ) {
    data.photo = this.selectedPhoto as Blob;
    const formData = new FormData();
    if ( this.selectedPhoto != undefined ) {
      formData.append( 'photo', this.selectedPhoto as Blob );
    }
    formData.append( 'first_name', data.first_name );
    formData.append( 'last_name', data.last_name );
    formData.append( 'phone', data.phone );
    this.userService.postUpdateUser( formData ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.message == "updated" ) {
        console.log( data );
        this.valid = true;
        setTimeout( () => {
          this.valid = false;
          location.reload();
        }, 1800 );
      }
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } );

  }


  // send new password
  onsubmitPass( data: updatePassword ) {
    data.email = this.user.email;
    this.userService.postUpdatePass( data ).subscribe( ( data ) => {
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
    this.userService.postUpdateEmail( data ).subscribe( ( data ) => {
      this.responseMsg = data;
      console.log( this.responseMsg );
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
    this.userService.verifyEmail( this.verificationData ).subscribe( ( result ) => {
      console.log( result );
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
    this.userService.resendEmail( this.dataEmail ).subscribe( ( result ) => {
      this.responseMsg = result;
      console.log( this.responseMsg );
      if ( this.responseMsg == null ) {
        this.exist = true;
        setTimeout( () => { this.exist = false; }, 2000 );
      }

    } );
  }

  focusInput() {
    let vrInputs = document.querySelectorAll<HTMLInputElement>( ".vrf-input input" );
    console.log( vrInputs );

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