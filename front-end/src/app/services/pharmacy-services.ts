import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Doctor } from '../interfaces/doctor';
import{DoctorDetails}from '../interfaces/doctor-details' ;
import{Lab}from '../interfaces/lab' ;
import{LabDetails}from '../interfaces/lab-details' ;
import{ProductDose}from '../interfaces/product-dose' ;
import{ProductDoseDetails}from '../interfaces/product-dose-details' ;
import { PharmacyNews } from '../interfaces/pharmacy-news';
import { Session } from '../interfaces/session';
import { Router } from '@angular/router';

@Injectable( {
  providedIn: 'root',
} )

export class PharmacyServices implements OnInit {

  constructor( private _HttpClient: HttpClient , private _Router : Router ) { }
  ngOnInit(): void { }


  getDoctors(): Observable<Doctor[]> {
    return this._HttpClient.get<Doctor[]>( environment.baseUrl+`/doctors` );
  }

  getDoctorsDetails( id: string ): Observable<DoctorDetails> {
    return this._HttpClient.get<DoctorDetails>( environment.baseUrl+`/doctors/show/${id}` );
  }

  getLabs(): Observable<Lab[]> {
    return this._HttpClient.get<Lab[]>( environment.baseUrl+'/labs' );
  }

  getLabsDetails( id: string ): Observable<LabDetails> {
    return this._HttpClient.get<LabDetails>( environment.baseUrl+`/labs/show/${id}` );
  }

  getProductDose (): Observable<ProductDose[]> {
    return this._HttpClient.get<ProductDose[]>( environment.baseUrl+ `/showProductDose`)
  }

  getProductDoseDetails(  age:string , weight : string ,id: string  ): Observable<ProductDoseDetails> {
    return this._HttpClient.get<ProductDoseDetails>( environment.baseUrl+`/showDose/${age}/${weight}/${id}` );
  }

  getNews(): Observable<PharmacyNews[]> {
    return this._HttpClient.get<PharmacyNews[]>( environment.baseUrl+`/news` );
  }

  deleteNews( id: number ): Observable<string> {
    return this._HttpClient.get<string>( environment.baseUrl+`/news/delete/${id}`, {  } );
  }

  getAllSession(): Observable<Session[]> {
    return this._HttpClient.get<Session[]> ( environment.baseUrl+`/session` );
  }

  showLiveSession(id: string): Observable<Session>  {
    return this._HttpClient.get<Session> ( environment.baseUrl+`/session/show/${id}` );
  }

  addComment(id: string , content: string): Observable<any>  {
    this.getAuth()
    return this._HttpClient.post<any> ( environment.baseUrl+`/session/addComment/${id}`, { contant: content } );
  }

  getComment(id: string ): Observable<any>  {
    return this._HttpClient.get<any> ( environment.baseUrl+`/session/ShowComment/${id}`);
  }

  getAuth() {
    const token = localStorage.getItem( 'access_token' );
    // when key is not local
    if ( token == null ) {
      localStorage.setItem( "access_token", "" ); //to initialize token if user don't login
      this._Router.navigate( ['/login'] );
    }
    else if ( token == "" ) {
      this._Router.navigate( ['/login'] );
    }
  }
}
