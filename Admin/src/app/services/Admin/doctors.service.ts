import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/interfaces/Admin/pharmServices';
import { environment } from 'src/environments/coordinator';


@Injectable( {
  providedIn: 'root'
} )
export class DoctorsService implements OnInit {

  userToken: any = localStorage.getItem( 'access_token' );
  constructor( private _HttpClient: HttpClient ) { }
  ngOnInit(): void {

  }

  getDoctors(): Observable<Doctor[]> {

    return this._HttpClient.get<Doctor[]>( environment.baseUrl + `/doctors/showall`, {} );
  }

  getOneDoctor( id: any ): Observable<Doctor> {

    return this._HttpClient.get<Doctor>( environment.baseUrl + `/doctors/edit/${id}`, {} );
  }

  addDoctor( data: any ): Observable<Doctor> {

    return this._HttpClient.post<Doctor>( environment.baseUrl + `/doctors/add`, data, {} );
  }

  postUpdateDoctor( data: any, id: any ): Observable<Doctor> {

    return this._HttpClient.post<Doctor>( environment.baseUrl + `/doctors/update/${id}`, data, {} );
  }
  deleteDoctor( id: number ): Observable<Doctor> {

    return this._HttpClient.get<Doctor>( environment.baseUrl + `/doctors/delete/${id}`, {} );
  }


}
