import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lab } from 'src/app/interfaces/Admin/pharmServices';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/coordinator';

@Injectable( {
  providedIn: 'root',
} )
export class LabsService {

  constructor( private _HttpClient: HttpClient ) { }

  getLabs(): Observable<Lab[]> {

    return this._HttpClient.get<Lab[]>( environment.baseUrl + `/labs/showall`, {} );
  }

  getOneLab( id: any ): Observable<Lab> {

    return this._HttpClient.get<Lab>( environment.baseUrl + `/labs/edit/${id}`, {} );
  }

  addLab( data: any ): Observable<Lab> {

    return this._HttpClient.post<Lab>( environment.baseUrl + `/labs/add`, data, {} );
  }

  postUpdateLab( data: any, id: any ): Observable<Lab> {

    return this._HttpClient.post<Lab>( environment.baseUrl + `/labs/update/${id}`, data, {} );
  }
  deleteLab( id: number ): Observable<Lab> {

    return this._HttpClient.get<Lab>( environment.baseUrl + `/labs/delete/${id}`, {} );
  }
}
