import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/User';
import { AuthService } from '../auth.service';
import { Login } from 'src/app/interfaces/Owner/auth';
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
  constructor( private auth: AuthService, private router: Router ) {
    if ( localStorage.getItem( 'access_token' ) ) {
      this.router.navigate( ['/owner/profile'] )
    }
    else {
      this.router.navigate( ['/login'] )
    }
  }

  onSubmit( data: Login ) {

    this.auth.accountantLogin( data ).subscribe( ( result ) => {
      this.ResponseMsg = result;
      console.warn( result );
      localStorage.setItem( "email", data.email );
      if ( this.ResponseMsg.token_type == "bearer" ) {
        localStorage.setItem( "access_token", this.ResponseMsg.access_token );
        this.router.navigate( ['/owner/profile'] );
      }
      else if ( this.ResponseMsg.message == "email not verified" ) {
        this.router.navigate( ['/verification'] );
      }
      else if ( this.ResponseMsg.error == "password is wrong" ) {
        this.passwordInvalid = true;//alert
        setTimeout( () => {
          this.passwordInvalid = false;
        }, 2500 );
      }
      else if ( this.ResponseMsg.error == "email is wrong" ) {
        this.emailInvalid = true;//alert
        setTimeout( () => {
          this.emailInvalid = false;
        }, 2500 );
      }

    }
    );

  }




  // show & hide password
  showPassword = false;
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }


  ngOnInit(): void {

    if ( !localStorage.getItem( 'access_token' ) ) {
      this.router.navigate( ['/login'] );
    }
  }

}
