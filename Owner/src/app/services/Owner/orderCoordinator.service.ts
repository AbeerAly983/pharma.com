import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable( {
    providedIn: 'root'
} )
export class OrderCoordinatorService {

    constructor( private http: HttpClient, private router: Router ) { }

    showOrderCoordinatorStats() {


        return this.http.get( `http://127.0.0.1:8000/api/owner/order_cordinators`, {} );
    }

    showOrderCoordinatorAll() {


        return this.http.get( `http://127.0.0.1:8000/api/owner/order_cordinators/all`, {} );
    }

    showOrderCoordinatorDay() {


        return this.http.get( `http://127.0.0.1:8000/api/owner/order_cordinators/today`, {} );
    }

    showOrderCoordinatorMonth() {


        return this.http.get( `http://127.0.0.1:8000/api/owner/order_cordinators/month`, {} );
    }

    showOrderCoordinatorYear() {


        return this.http.get( `http://127.0.0.1:8000/api/owner/order_cordinators/year`, {} );
    }

}



