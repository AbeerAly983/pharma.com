import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable( {
    providedIn: 'root'
} )
export class AccountantService {

    constructor( private http: HttpClient, private router: Router ) { }

    showAccountantStats() {
        return this.http.get( `http://127.0.0.1:8000/api/owner/accountants`, {} );
    }

    showAccountantAll() {
        return this.http.get( `http://127.0.0.1:8000/api/owner/accountants/all`, {} );
    }

    showAccountantDay() {
        return this.http.get( `http://127.0.0.1:8000/api/owner/accountants/today`, {} );
    }

    showAccountantMonth() {
        return this.http.get( `http://127.0.0.1:8000/api/owner/accountants/month`, {} );
    }

    showAccountantYear() {
        return this.http.get( `http://127.0.0.1:8000/api/owner/accountants/year`, {} );
    }
}



