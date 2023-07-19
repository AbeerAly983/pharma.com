import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable( {
  providedIn: 'root'
} )
export class NewsService {

  constructor( private http: HttpClient ) { }

  getTotalNumbersOfNews() {


    return this.http.get( "http://127.0.0.1:8000/api/owner/news", {} );
  }

  getAllNews() {


    return this.http.get( "http://127.0.0.1:8000/api/owner/news/all", {} );
  }
  getAllNewsToday() {


    return this.http.get( "http://127.0.0.1:8000/api/owner/news/today", {} );
  }
  getAllNewsMonth() {


    return this.http.get( "http://127.0.0.1:8000/api/owner/news/month", {} );
  }
  getAllNewsYear() {


    return this.http.get( "http://127.0.0.1:8000/api/owner/news/year", {} );
  }



}
