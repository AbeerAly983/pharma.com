import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable( {
  providedIn: 'root'
} )
export class AuthService {

  constructor( private http: HttpClient ) { }

  accountantLogin( data: any ) {
    return this.http.post( 'http://127.0.0.1:8000/api/owner/login', data );
  }
  forgetPasswordAccount( data: any ) {
    return this.http.post( 'http://127.0.0.1:8000/api/owner/forgotPassword', data );
  }
  resetPasswordAccount( data: any ) {
    return this.http.post( 'http://127.0.0.1:8000/api/owner/resetPassword', data );
  }
  verifyEmailAccount( data: any ) {
    return this.http.post( 'http://127.0.0.1:8000/api/owner/verifyEmail', data );
  }
  resetPassword( data: any ) {
    return this.http.post( 'http://127.0.0.1:8000/api/owner/forgotPassword', data );
  }
  resendCode( data: any ) {
    return this.http.post( 'http://127.0.0.1:8000/api/resesndEmail', data );
  }

}
