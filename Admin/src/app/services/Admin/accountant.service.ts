import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Accountant } from 'src/app/interfaces/Admin/accountant';
import { environment } from 'src/environments/coordinator';

@Injectable( {
    providedIn: 'root'
} )
export class AccountantService {

    constructor( private http: HttpClient, private router: Router ) { }


    showAccountants(): Observable<Accountant[]> {
        return this.http.get<Accountant[]>( environment.baseUrl + '/showAccountants', {} );
    }

    addAccountant( data: any ): Observable<string> {
        return this.http.post<string>( environment.baseUrl + '/addAccountant', data, {} );
    }

    enableAccountant( id: number ): Observable<string> {
        return this.http.post<string>( environment.baseUrl + `/ableAccountant/${id}`, null, {} );
    }

    disableAccountant( id: number ): Observable<string> {
        return this.http.post<string>( environment.baseUrl + `/disableAccountant/${id}`, null, {} );
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



