import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable( {
    providedIn: 'root'
} )
export class AdminService {

    constructor( private http: HttpClient, private router: Router ) { }


    showAdmins() {


        return this.http.get( "http://127.0.0.1:8000/api/owner/show_admins", {} );
    }

    addAdmin( data: any ) {


        return this.http.post( "http://127.0.0.1:8000/api/owner/add_admin", data, {} );
    }

    enableAdmin( id: number ) {


        return this.http.post( `http://127.0.0.1:8000/api/owner/able_admin/${id}`, null, {} );
    }

    disableAdmin( id: number ) {


        return this.http.post( `http://127.0.0.1:8000/api/owner/disable_admin/${id}`, null, {} );
    }

    showAdminStats() {


        return this.http.get( `http://127.0.0.1:8000/api/owner/admins`, {} );
    }

    showAdminAll() {


        return this.http.get( `http://127.0.0.1:8000/api/owner/admins/all`, {} );
    }

    showAdminDay() {


        return this.http.get( `http://127.0.0.1:8000/api/owner/admins/today`, {} );
    }

    showAdminMonth() {


        return this.http.get( `http://127.0.0.1:8000/api/owner/admins/month`, {} );
    }

    showAdminYear() {


        return this.http.get( `http://127.0.0.1:8000/api/owner/admins/year`, {} );
    }
}



