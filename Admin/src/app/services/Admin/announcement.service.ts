import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Announcement } from 'src/app/interfaces/Admin/announce';
import { environment } from 'src/environments/coordinator';


@Injectable( {
    providedIn: 'root'
} )
export class AnnouncementService implements OnInit {

    userToken: any = localStorage.getItem( 'access_token' );
    constructor( private _HttpClient: HttpClient ) { }
    ngOnInit(): void {

    }

    getAnnounce(): Observable<Announcement[]> {
        return this._HttpClient.get<Announcement[]>( environment.otherbaseUrl + `/announcements` );
    }

    getOneAnnounce( id: any ): Observable<Announcement> {

        return this._HttpClient.get<Announcement>( environment.baseUrl + `/announcement/edit/${id}`, {} );
    }

    addAnnounce( data: any ): Observable<string> {

        return this._HttpClient.post<string>( environment.baseUrl + `/announcement/add`, data, {} );
    }

    postUpdateAnnounce( data: any, id: any ): Observable<string> {

        return this._HttpClient.post<string>( environment.baseUrl + `/announcement/update/${id}`, data, {} );
    }
    deleteAnnounce( id: number ): Observable<Announcement> {

        return this._HttpClient.get<Announcement>( environment.baseUrl + `/announcement/delete/${id}`, {} );
    }


}
