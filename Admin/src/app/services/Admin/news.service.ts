import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/interfaces/Admin/news';
import { environment } from 'src/environments/coordinator';

@Injectable( {
    providedIn: 'root'
} )
export class NewsService {

    constructor( private http: HttpClient ) { }
    ngOnInit(): void {

    }

    getNews(): Observable<News[]> {
        return this.http.get<News[]>( environment.otherbaseUrl + `/news` );
    }

    getNewsById( id: any ): Observable<News> {
        return this.http.get<News>( environment.baseUrl + `/news/edit/${id}`, {} );
    }

    addNews( data: any ): Observable<News> {
        return this.http.post<News>( environment.baseUrl + `/news/add`, data, {} );
    }

    updateNews( data: any, id: any ): Observable<News> {
        return this.http.post<News>( environment.baseUrl + `/news/update/${id}`, data, {} );
    }
    deleteNews( id: number ): Observable<News> {
        return this.http.get<News>( environment.baseUrl + `/news/delete/${id}`, {} );
    }

}
