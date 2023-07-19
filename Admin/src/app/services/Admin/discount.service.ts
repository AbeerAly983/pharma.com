import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DiscountProduct } from 'src/app/interfaces/Admin/discount';
import { environment } from 'src/environments/coordinator';

@Injectable( {
  providedIn: 'root'
} )
export class DiscountService {

  constructor( private http: HttpClient ) { }

  getDiscount(): Observable<DiscountProduct[]> {
    return this.http.get<DiscountProduct[]>( environment.otherbaseUrl + "/discounts" )
  }

  getDiscountById( id: string ): Observable<DiscountProduct> {
    return this.http.get<DiscountProduct>( environment.baseUrl + `/discount/edit/${id} `, {} );
  }

  editDiscount( id: string, discount: any ): Observable<DiscountProduct> {
    return this.http.post<DiscountProduct>( environment.baseUrl + `/discount/update/${id}`, discount, {} )
  }

  addDiscount( id: string, discount: any ): Observable<DiscountProduct> {
    return this.http.post<DiscountProduct>( environment.baseUrl + `/discount/add/${id}`, discount, {} )
  }
  deleteDiscount( id: string ): Observable<DiscountProduct> {
    return this.http.get<DiscountProduct>( environment.baseUrl + `/discount/delete/${id}`, {} )
  }

}
