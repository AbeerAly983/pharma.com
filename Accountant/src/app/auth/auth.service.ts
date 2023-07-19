import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/coordinator';


@Injectable( {
  providedIn: 'root'
} )
export class AuthService {

  constructor( private http: HttpClient ) { }

  accountantLogin( data: any ) {
    return this.http.post(environment.baseUrl+ '/login', data );
  }
  forgetPasswordAccount( data: any ) {
    return this.http.post(environment.baseUrl+  '/forgotPassword', data );
  }
  resetPasswordAccount( data: any ) {
    return this.http.post(environment.baseUrl+  '/resetPassword', data );
  }
  verifyEmailAccount( data: any ) {
    return this.http.post(environment.baseUrl+  '/verifyEmail', data );
  }
  resetPassword( data: any ) {
    return this.http.post(environment.baseUrl+  '/forgotPassword', data );
  }
  resendCode( data: any ) {
    return this.http.post( 'http://127.0.0.1:8000/api/resesndEmail', data );
  }

}
