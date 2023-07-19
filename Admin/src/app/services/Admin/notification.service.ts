import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { NotificationExpire, NotificationReorder } from 'src/app/interfaces/Admin/notification';
import { environment } from 'src/environments/coordinator';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor( private http: HttpClient) {
  }

  getExpir():Observable<NotificationExpire[]> {
    return this.http.get<NotificationExpire[]>(environment.otherbaseUrl+ "/expire" )
  }
  getReorder():Observable<NotificationReorder[]> {
    return this.http.get<NotificationReorder[]>( environment.otherbaseUrl+"/reorder" )
  }
}
