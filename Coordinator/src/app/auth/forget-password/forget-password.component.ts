import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/Coordinator/auth.service';
import { ForgetPassword } from '../../interfaces/Coordinator/auth';

@Component( {
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css', '../login/login.component.css']
} )
export class ForgetPasswordComponent {

  constructor( private auth: AuthService, private router: Router ) { }

  email = "";
  responseMsg: any;
  inValid: boolean = false;

  onForget( data: ForgetPassword ) {
    this.auth.forgetPasswordCoord( data ).subscribe( ( result: any ) => {
      this.responseMsg = result;
      if ( this.responseMsg.success == true ) {
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

  ngOnInit(): void {}

}
