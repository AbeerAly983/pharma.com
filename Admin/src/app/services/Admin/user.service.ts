import { HttpClient } from '@angular/common/http';
import { NonNullAssert } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin, updateEmail, updatePassword } from 'src/app/interfaces/Admin/admin';
import { environment } from 'src/environments/coordinator';

@Injectable( {
    providedIn: 'root'
} )
export class UserService {

    constructor( private http: HttpClient, private router: Router ) { }


    getUser(): Observable<Admin[]> {
        return this.http.get<Admin[]>( environment.baseUrl + "/profile", {} );
    }

    postUpdateUser( data: any ): Observable<Admin> {
        return this.http.post<Admin>( environment.baseUrl + "/updateUserName", data, {} );
    }

    postUpdatePass( data: any ): Observable<updatePassword> {
        return this.http.post<updatePassword>( environment.baseUrl + `/updatePassword`, data, {} );
    }

    postUpdateEmail( data: any ): Observable<updateEmail> {
        return this.http.post<updateEmail>( environment.baseUrl + "/update_email", data, {} );
    }

    verifyEmail( data: any ): Observable<string> {
        return this.http.post<string>( environment.baseUrl + "/new_email_verification", data, {} );
    }

    resendEmail( data: any ): Observable<string> {
        return this.http.post<string>( environment.otherbaseUrl + "/resesndEmail", data );
    }

    logout(): Observable<Admin> {
        return this.http.post<Admin>( environment.baseUrl + "/logout", null, {} );
    }

    getAuth() {
        const token = localStorage.getItem( 'access_token' );
        // when key is not local
        if ( token == null ) {
            localStorage.setItem( "access_token", "" ); //to initialize token if user don't login
            this.router.navigate( ['/login'] );
        }
        else if ( token == "" ) {
            this.router.navigate( ['/login'] );
        }
    }
}