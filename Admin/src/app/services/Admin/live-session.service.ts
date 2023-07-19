import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LiveSession, LiveSessionComment } from 'src/app/interfaces/Admin/live-session';
import { environment } from 'src/environments/coordinator';

@Injectable( {
  providedIn: 'root'
} )
export class LiveSessionService {

  constructor( private http: HttpClient ) { }

  getSession(): Observable<LiveSession[]> {
    return this.http.get<LiveSession[]>( environment.baseUrl + "/session", {} )
  }
  getSessionComment( id: any ): Observable<LiveSessionComment> {
    return this.http.get<LiveSessionComment>( environment.baseUrl + `/session/ShowComment/${id}`, {} )
  }
  getSessionById( id: any ): Observable<LiveSession> {
    return this.http.get<LiveSession>( environment.baseUrl + `/session/edit/${id}`, {} );
  }

  addSession( data: any ): Observable<LiveSession> {
    return this.http.post<LiveSession>( environment.baseUrl + "/session/add", data, {} );
  }

  updateSession( data: any, id: any ): Observable<LiveSession> {
    return this.http.post<LiveSession>( environment.baseUrl + `/session/update/${id}`, data, {} );
  }

  enableSession( id: number ): Observable<LiveSession> {
    return this.http.get<LiveSession>( environment.baseUrl + `/session/able/${id}`, {} );
  }

  disableSession( id: number ): Observable<LiveSession> {
    return this.http.get<LiveSession>( environment.baseUrl + `/session/disable/${id}`, {} );
  }
}
