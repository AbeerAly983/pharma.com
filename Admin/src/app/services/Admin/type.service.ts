import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Type } from 'src/app/interfaces/Admin/product_type';
import { environment } from 'src/environments/coordinator';

@Injectable( {
  providedIn: 'root'
} )
export class TypeService {

  constructor( private http: HttpClient ) { }

  getCategory(): Observable<Type[]> {
    return this.http.get<Type[]>( environment.otherbaseUrl + "/types" )
  }

  getCategoryById( id: number ): Observable<Type> {
    return this.http.get<Type>( environment.baseUrl + `/type/edit/${id} `, {} );
  }

  editCategory( id: any, type: any ): Observable<Type> {
    return this.http.post<Type>( environment.baseUrl + `/type/update/${id}`, type, {} )
  }

  addCategory( type: any ): Observable<Type> {
    return this.http.post<Type>( environment.baseUrl + `/type/add`, type, {} )
  }
}
