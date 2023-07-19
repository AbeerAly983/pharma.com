import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable( {
  providedIn: 'root'
} )
export class LivesessionService {

  constructor( private http: HttpClient ) { }

  getTotalNumbersOfSessions() {


    return this.http.get( "http://127.0.0.1:8000/api/owner/sessions", {} );
  }

  getAllSessions() {


    return this.http.get( "http://127.0.0.1:8000/api/owner/sessions/all", {} );
  }
  getAllSessionsToday() {


    return this.http.get( "http://127.0.0.1:8000/api/owner/sessions/today", {} );
  }
  getAllSessionsMonth() {


    return this.http.get( "http://127.0.0.1:8000/api/owner/sessions/month", {} );
  }
  getAllSessionsYear() {


    return this.http.get( "http://127.0.0.1:8000/api/owner/sessions/year", {} );
  }



}
