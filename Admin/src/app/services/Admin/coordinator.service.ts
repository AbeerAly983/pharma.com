import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Coordinator } from 'src/app/interfaces/Admin/coordinator';
import { environment } from 'src/environments/coordinator';

@Injectable( {
    providedIn: 'root'
} )
export class CoordinatorService {

    constructor( private http: HttpClient, private router: Router ) { }

    showCoordinators(): Observable<Coordinator[]> {
        return this.http.get<Coordinator[]>( environment.baseUrl + "/showOrderCordinators", {} );
    }

    addCoordinator( data: any ): Observable<string> {
        return this.http.post<string>( environment.baseUrl + "/addOrderCordinator", data, {} );
    }

    enableCoordinator( id: any, data: any ): Observable<string> {
        return this.http.post<string>( environment.baseUrl + `/ableOrderCordinator/${id}`, data, {} );
    }

    disableCoordinator( id: any, data: any ): Observable<string> {
        return this.http.post<string>( environment.baseUrl + `/disableOrderCordinator/${id}`, data, {} );
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



