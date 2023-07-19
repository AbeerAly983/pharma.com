import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import {Category}from '../interfaces/category'
import {Product}from '../interfaces/product'
import {Announcement}from '../interfaces/announcement'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private _HttpClient: HttpClient ) { }

  getAllAnnouncments() : Observable<Announcement[]> {
    return this._HttpClient.get<Announcement[]>( environment.baseUrl+'/announcements' )
  }

  getMaxDiscounts() : Observable<number> {
    return this._HttpClient.get<number>( environment.baseUrl+'/maxDiscounts' )
  }

  getCategories()  : Observable<Category[]>{
    return this._HttpClient.get<Category[]>( environment.baseUrl+"/types" );
  }

  getAllProducts() : Observable<Product[]>{
    return this._HttpClient.get<Product[]>(environment.baseUrl+'/products') ;
  }

}
