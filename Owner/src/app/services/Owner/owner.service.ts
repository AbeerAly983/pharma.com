import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable( {
    providedIn: 'root'
} )
export class OwnerService {

    constructor( private http: HttpClient, private router: Router ) { }


    getUser() {


        return this.http.get( "http://127.0.0.1:8000/api/owner/profile", {} );
    }

    postUpdateUser( data: any ) {


        return this.http.post( "http://127.0.0.1:8000/api/owner/updateProfile", data, {} );
    }

    postUpdatePass( data: any ) {


        return this.http.post( `http://127.0.0.1:8000/api/owner/updatePassword`, data, {} );
    }

    postUpdateEmail( data: any ) {


        return this.http.post( "http://127.0.0.1:8000/api/owner/update_email", data, {} );
    }

    verifyEmail( data: any ) {


        return this.http.post( "http://127.0.0.1:8000/api/owner/new_email_verification", data, {} );
    }


    resendEmail( data: any ) {
        return this.http.post( "http://127.0.0.1:8000/api/resesndEmail", data );
    }

    logout() {


        return this.http.post( "http://127.0.0.1:8000/api/owner/logout", null, {} );
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




