import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { User } from 'src/app/auth/User';
import { AuthService } from '../auth.service';
import { Login } from 'src/app/interfaces/Admin/auth';
@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
} )

export class LoginComponent {



  loginId: any;
  userModel = new User( "", "", "", "", "" );
  ResponseMsg: any;
  emailInvalid: boolean = false;
  passwordInvalid: boolean = false;
  emailDisabled: boolean = false;
  constructor( private auth: AuthService, private router: Router ) {
    // if (localStorage.getItem( 'access_token' ) ) {
    //      router.navigate( ['/admin/profile'] );
    //     }
    // else {
    //   router.navigate( ['/login'] );
    // }

    const accessToken = localStorage.getItem( 'access_token' );
    if ( accessToken ) {
      this.router.navigate( ['/admin/profile'] );
    } else {
      this.router.navigate( ['/login'] );
    }
  }

  onSubmit( data: Login ) {
    this.auth.adminLogin( data ).subscribe( ( result ) => {
      this.ResponseMsg = result;
      console.warn( result );
      localStorage.setItem( "email", data.email );
      if ( this.ResponseMsg.token_type == "bearer" ) {
        localStorage.setItem( "access_token", this.ResponseMsg.access_token );
        this.router.navigate( ['/admin/profile'] );
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
      else if ( this.ResponseMsg.message == "this email id disabled" ) {
        this.emailDisabled = true;//alert
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

    if ( !localStorage.getItem( 'access_token' ) ) {
      this.router.navigate( ['/login'] );
    }

  }



}
