import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable( {
    providedIn: 'root'
} )
export class LabService {

    constructor( private http: HttpClient, private router: Router ) { }

    showLabStats() {


        return this.http.get( `http://127.0.0.1:8000/api/owner/labs`, {} );
    }

    showLabAll() {


        return this.http.get( `http://127.0.0.1:8000/api/owner/labs/all`, {} );
    }

    showLabDay() {


        return this.http.get( `http://127.0.0.1:8000/api/owner/labs/today`, {} );
    }

    showLabMonth() {


        return this.http.get( `http://127.0.0.1:8000/api/owner/labs/month`, {} );
    }

    showLabYear() {


        return this.http.get( `http://127.0.0.1:8000/api/owner/labs/year`, {} );
    }
}



