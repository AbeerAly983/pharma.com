import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/Coordinator/User';
import { AuthService } from '../../services/Coordinator/auth.service';
import { Login } from 'src/app/interfaces/Coordinator/auth';
@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
} )

export class LoginComponent {

  userModel = new User( "", "", "", "", "" );

  ResponseMsg: any;
  emailInvalid: boolean = false;
  emailDisabled: boolean = false;
  passwordInvalid: boolean = false;

  constructor( private auth: AuthService, private router: Router ) {
    this.checkAccessToken();
  }

  checkAccessToken() {
    const accessToken = localStorage.getItem( 'access_token' );
    if ( accessToken ) {
      this.router.navigate( ['/orderCoordinator/profile'] );
    } else {
      this.router.navigate( ['/login'] );
    }
  }

  onSubmit( data: Login ) {

    // orderCoordinator
    this.auth.coordinatorLogin( data ).subscribe( ( result ) => {
      this.ResponseMsg = result;
      console.warn( result );
      localStorage.setItem( "access_token", this.ResponseMsg.access_token );
      localStorage.setItem( "email", data.email );
      if ( this.ResponseMsg.token_type == "bearer" ) {
        this.router.navigate( ['/orderCoordinator/profile'] );
      }
      else if ( this.ResponseMsg.message == "email not verified" ) {
        this.router.navigate( ['/verification'] );
      }
      else if ( this.ResponseMsg.error == "password is wrong" ) {
        this.passwordInvalid = true;
        setTimeout( () => {
          this.passwordInvalid = false;
        }, 2500 );
      }
      else if ( this.ResponseMsg.error == "email is wrong" ) {
        this.emailInvalid = true;
        setTimeout( () => {
          this.emailInvalid = false;
        }, 2500 );
      }
      else if ( this.ResponseMsg.message == "this email id disabled" ) {
        this.emailDisabled = true;
        setTimeout( () => {
          this.emailDisabled = false;
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


  }

}
