import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor( private http: HttpClient) {
  }

  getExpir() {
    return this.http.get( "http://127.0.0.1:8000/api/expire" )
  }
  getReorder():Observable<any> {
    return this.http.get( "http://127.0.0.1:8000/api/reorder",{} )
  }
}
