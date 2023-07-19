import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable( {
    providedIn: 'root'
} )
export class NewUserService {

    constructor( private http: HttpClient, private router: Router ) { }

    showNewUserStats() {


        return this.http.get( `http://127.0.0.1:8000/api/owner/new_users`, {} );
    }

    showNewUserAll() {


        return this.http.get( `http://127.0.0.1:8000/api/owner/new_users/all`, {} );
    }

    showNewUserDay() {


        return this.http.get( `http://127.0.0.1:8000/api/owner/new_users/today`, {} );
    }

    showNewUserMonth() {


        return this.http.get( `http://127.0.0.1:8000/api/owner/new_users/month`, {} );
    }

    showNewUserYear() {


        return this.http.get( `http://127.0.0.1:8000/api/owner/new_users/year`, {} );
    }
}



