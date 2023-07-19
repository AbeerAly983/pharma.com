import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Accountant, updateEmail, updatePassword } from 'src/app/interfaces/Accountant/accountant';
import { environment } from 'src/environments/coordinator';

@Injectable( {
    providedIn: 'root'
} )
export class UserService {

    constructor( private http: HttpClient, private router: Router ) { }


    getUser(): Observable<Accountant[]> {
        return this.http.get<Accountant[]>( environment.baseUrl + "/profile", {} );
    }

    postUpdateUser( data: any ): Observable<Accountant> {
        return this.http.post<Accountant>( environment.baseUrl + "/updateProfile", data, {} );
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
        return this.http.post<string>( "http://127.0.0.1:8000/api/resesndEmail", data );
    }

    logout() {
        return this.http.post( environment.baseUrl + "/logout", null, {} );
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




