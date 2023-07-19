import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable( {
    providedIn: 'root'
} )
export class DoctorService {

    constructor( private http: HttpClient, private router: Router ) { }

    showDoctorStats() {


        return this.http.get( `http://127.0.0.1:8000/api/owner/doctors`, {} );
    }

    showDoctorAll() {


        return this.http.get( `http://127.0.0.1:8000/api/owner/doctors/all`, {} );
    }

    showDoctorDay() {


        return this.http.get( `http://127.0.0.1:8000/api/owner/doctors/today`, {} );
    }

    showDoctorMonth() {


        return this.http.get( `http://127.0.0.1:8000/api/owner/doctors/month`, {} );
    }

    showDoctorYear() {


        return this.http.get( `http://127.0.0.1:8000/api/owner/doctors/year`, {} );
    }
}



