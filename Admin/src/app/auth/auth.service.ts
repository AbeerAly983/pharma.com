import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/coordinator';


@Injectable( {
  providedIn: 'root'
} )
export class AuthService {

  constructor( private http: HttpClient ) { }



  adminLogin( data: any ):Observable<string> {
    return this.http.post<string>(environment.baseUrl+ '/login', data );
  }
  forgetPasswordAdmin( data: any ):Observable<string>  {
    return this.http.post<string>(environment.baseUrl+ '/forgotPassword', data );
  }
  resetPasswordAdmin( data: any ):Observable<string>  {
    return this.http.post<string>(environment.baseUrl+ '/resetPassword', data );
  }
  verifyEmailAdmin( data: any ):Observable<string>  {
    return this.http.post<string>( environment.baseUrl+'/verifyEmail', data );
  }
  resetPassword( data: any ):Observable<string>  {
    return this.http.post<string>(environment.baseUrl+ '/forgotPassword', data );
  }
  resendCode( data: any ):Observable<string>  {
    return this.http.post<string>(environment.otherbaseUrl+ '/resesndEmail', data );
  }


}