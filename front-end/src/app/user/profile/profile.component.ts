import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Verification, updatePassword } from 'src/app/interfaces/auth';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { Account, AccountShortData, updateEmail } from 'src/app/interfaces/account';

@Component( {
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
} )
export class ProfileComponent {

  // to match password wit confirm
  userModel = new User( "", "", "", "", "" );

  user!: Account;
  userShortData!: AccountShortData;
  responseMsg: any;

  showEditPass: boolean = false;
  showEditEmail: boolean = false;
  showVerification: boolean = false;
  showEditProfile: boolean = true;
  showBack: boolean = false;

  valid: boolean = false;
  inValid: boolean = false;
  exist: boolean = false;
  isLoading: boolean = true;
  selectedPhoto: Blob | undefined;


  verificationData: Verification = { otp: "", email: "" };
  dataEmail!: updateEmail;
  constructor( private userService: UserService, private router: Router ) { }


  onPhotoSelected( event: Event ) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];
    if ( file ) {
      this.selectedPhoto = file;
    }
  }


  getUser() {
    this.userService.getUser().subscribe( ( data: any ) => {
      this.user = data;
      this.isLoading = false;
    } );
  }

  getUserShortData() {
    this.userService.getUser().subscribe( ( data: any ) => {
      this.userShortData = data;
      this.isLoading = false;
    } );
  }


  // send updating data
  onsubmit( data: Account ) {
    const formData = new FormData();
    if ( this.selectedPhoto != undefined ) {
      formData.append( 'photo', this.selectedPhoto as Blob );
    }
    formData.append( 'first_name', data.first_name );
    formData.append( 'last_name', data.last_name );
    formData.append( 'city', data.city );
    formData.append( 'street', data.street );
    formData.append( 'phone', data.phone );
    this.userService.postUpdateUser( formData ).subscribe( ( data ) => {
      this.responseMsg = data;
      this.valid = true;
      setTimeout( () => {
        this.valid = false;
        location.reload();
      }, 2300 );
    }
    );
  }


  // send new password
  onsubmitPass( data: updatePassword ) {
    data.email = this.user.email;
    this.userService.postUpdatePass( data, this.user.id ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.message == "Password Updated" ) {
        this.valid = true;
        setTimeout( () => {
          this.valid = false;
        }, 2500 );
      }

      else if ( this.responseMsg.message == "Password not correct" ) {
        this.inValid = true;
        setTimeout( () => {
          this.inValid = false;
        }, 2500 );
      }
      else if ( this.responseMsg.message == "There aren't any change in password" ) {
        this.exist = true;
        setTimeout( () => {
          this.exist = false;
        }, 2500 );
      }
      this.clearData();
    } );
  }


  // send new email
  onsubmitEmail( data: updateEmail ) {
    this.dataEmail = data;
    localStorage.setItem( 'email', data.email );
    this.userService.postUpdateEmail( data ).subscribe( ( data ) => {
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
        }, 2500 );
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
    this.verificationData.email = localStorage.getItem( 'email' );
    this.userService.verifyEmail( this.verificationData ).subscribe( ( result ) => {
      this.responseMsg = result;

      if ( this.responseMsg.sucess == true ) {
        localStorage.removeItem( "email" );

        this.valid = true;
        setTimeout( () => {
          this.valid = false;
          this.router.navigate( ['/user'] );
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

    } );
  }


  // resend code with email
  resend() {
    let otpInputs = document.querySelectorAll<HTMLInputElement>( ".vrf-input input" );

    // clear data input
    for ( let index = 0; index < otpInputs.length; index++ ) {
      otpInputs[index].value = "";
    }

    this.userService.postUpdateEmail( this.dataEmail ).subscribe( ( result ) => {
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
