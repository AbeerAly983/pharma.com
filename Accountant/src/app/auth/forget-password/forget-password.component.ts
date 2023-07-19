import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ForgetPassword } from '../../interfaces/Accountant/auth';

@Component( {
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css', '../login/login.component.css']
} )
export class ForgetPasswordComponent {

  constructor( private auth: AuthService, private router: Router ) {
    if( !localStorage.getItem('email')){
      this.router.navigate( ['/forgetPassword'] );
    }
    if(localStorage.getItem('email')){
      this.router.navigate(['/forgetPassword'])
      localStorage.removeItem('email')
    }
  }
  email = "";
  inValid: boolean = false;
  responseMsg: any;
  onForget( data: ForgetPassword ) {

    // accountant
    this.auth.forgetPasswordAccount( data ).subscribe( ( result: any ) => {
      this.responseMsg = result;
      // console.log(this.responseMsg);

      if ( this.responseMsg.sucess == true ) {
        this.email = data.email;
        localStorage.setItem( "email", this.email );
        this.router.navigate( ['/resetPassword'] );
      }
    } ,
    ( error => {
      if ( error.status == 422 ) {
        this.inValid = true;
        setTimeout( () => {
          this.inValid = false;
        }, 2000 );
      }
    } ) );

  }


  backLogin() {
    this.router.navigate( ['/login'] );
  }

  ngOnInit(): void {
  }

}
