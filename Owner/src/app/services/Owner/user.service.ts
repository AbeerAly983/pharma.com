import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable( {
    providedIn: 'root'
} )
export class UserService {

    constructor( private http: HttpClient, private router: Router ) { }

    showUserStats() {

        return this.http.get( `http://127.0.0.1:8000/api/owner/users`, {} );
    }

    showUserAll() {

        return this.http.get( `http://127.0.0.1:8000/api/owner/users/all`, {} );
    }

    showUserDay() {

        return this.http.get( `http://127.0.0.1:8000/api/owner/users/today`, {} );
    }

    showUserMonth() {

        return this.http.get( `http://127.0.0.1:8000/api/owner/users/month`, {} );
    }

    showUserYear() {

        return this.http.get( `http://127.0.0.1:8000/api/owner/users/year`, {} );
    }
}



