import { Component, Output } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { Router } from '@angular/router';
import { Register } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component( {
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../login/login.component.css']
} )
export class SignupComponent {

  loading: boolean = false; // add loading variable


  constructor( private auth: AuthService, private router: Router ) {
    if ( localStorage.getItem( 'access_token' ) !== "" ) {
      router.navigate( ['/home'] );
    }
    else {
      router.navigate( ['/signup'] );
    }
  }


  userModel = new User( "", "", "", "", "" );

  inValid: boolean = false;
  ResponseMsg: any;

  errorStatus: number | undefined;

  onSubmit( data: Register ) {
    this.loading = true; // set loading variable to true

    this.auth.register( data ).subscribe( ( result ) => {
      this.ResponseMsg = result;

      if ( this.ResponseMsg.message == "Account Created Sucessfully" ) {

        this.router.navigate( ['/verification'] );
      }

      else if ( this.ResponseMsg.message == "The email has already been taken." ) {
        this.inValid = true;
        setTimeout( () => {
          this.inValid = false;
        }, 3000 );
      }
      this.loading = false; // set loading variable to false after the function is done

    }
    );

    localStorage.setItem( "email", data.email );

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
  }
}
