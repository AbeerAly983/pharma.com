import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Coordinator, updateEmail, updatePassword } from 'src/app/interfaces/Coordinator/coordinator';
import { Users } from 'src/app/interfaces/Coordinator/users';
import { environment } from 'src/environments/coordinator';

@Injectable( {
    providedIn: 'root'
} )
export class UserService {

    constructor( private http: HttpClient, private router: Router ) { }


    getUser(): Observable<Coordinator> {

        return this.http.get<Coordinator>( environment.baseUrl + "/profile", {} );
    }

    postUpdateUser( data: any ): Observable<Coordinator> {

        return this.http.post<Coordinator>( environment.baseUrl + "/updateProfile", data, {} );
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

    resendEmail( data: any ): Observable<updateEmail> {
        return this.http.post<updateEmail>( "http://127.0.0.1:8000/api/resesndEmail", data );
    }

    logout(): Observable<string> {

        return this.http.post<string>( environment.baseUrl + "/logout", {} );
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
