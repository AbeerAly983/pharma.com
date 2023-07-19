import { Component, } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { Login } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
} )

export class LoginComponent {

  userModel = new User( "", "", "", "", "" );

  ResponseMsg: any;
  emailInvalid: boolean = false;
  passwordInvalid: boolean = false;
  loading: boolean = false; // add loading variable


  constructor( private auth: AuthService, private router: Router ) {
    if ( localStorage.getItem( 'access_token' ) !== "" ) {
      router.navigate( ['/home'] );
    }
    else {
      router.navigate( ['/login'] );
    }
  }

  onSubmit( data: Login ) {
    this.loading = true; // set loading variable to true

    this.auth.login( data ).subscribe( ( result: any ) => {
      this.ResponseMsg = result;
      if ( this.ResponseMsg.token_type == "bearer" ) {
        localStorage.setItem( "access_token", this.ResponseMsg.access_token );
        this.auth.decodeUserData();
        this.router.navigate( ['/home'] );
      }

      else if ( this.ResponseMsg.message == "Email Incorrect" ) {
      this.emailInvalid = true;//alert
        setTimeout( () => {this.emailInvalid = false;
        }, 2000 );
      }

      else if ( this.ResponseMsg.message === "Password Incorrect" ) {
        this.passwordInvalid = true;//alert
        setTimeout( () => {this.passwordInvalid = false; }, 2000 );


      }
      this.loading = false; // set loading variable to false after the function is done

    }
    );
  }


  // show & hide password
  showPassword = false;
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  ngOnInit(): void { }

}
