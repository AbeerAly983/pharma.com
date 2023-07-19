import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from "src/environments/environment";
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable( {
  providedIn: 'root'
} )
export class UserService {
  numberOfWishListItems = new BehaviorSubject( null );

  constructor( private http: HttpClient, private router: Router ) {
    this.wishList().subscribe( {
      next: ( res ) => {
        this.numberOfWishListItems.next( res[1].numOfFavoriteItems )
      },
      error: ( err ) => console.log( err )
    } )
  }

  postCheckoutData( data: any ): Observable<any> {
    return this.http.post( environment.baseUrl + "/addOrder", data, {} );
  }

  getUser() {
    return this.http.get( environment.baseUrl + "/auth/edit", {} );
  }

  postUpdateUser( data: any ): Observable<any> {
    return this.http.post( environment.baseUrl + "/auth/update", data, {} );
  }

  postUpdatePass( data: any, id: any ): Observable<any> {
    return this.http.post( environment.baseUrl + `/auth/change_password/${id}`, data, {} );
  }

  postUpdateEmail( data: any ): Observable<any> {
    return this.http.post( environment.baseUrl + "/auth/sendmail", data, {} );
  }

  verifyEmail( data: any ): Observable<any> {
    return this.http.post( environment.baseUrl + "/new_email_verification", data, {} );
  }

  logOut(): Observable<any> {
    return this.http.get( environment.baseUrl + `/auth/logout`, {} )
  }

  postFeedback( data: any ): Observable<any> {
    this.getAuth();
    return this.http.post( environment.baseUrl + "/feedbacks", data, {} );
  }

  wishList(): Observable<any> {
    this.getAuth();
    return this.http.get( environment.baseUrl + "/favorite", {} );
  }

  getWishList(): Observable<any> {
    return this.http.get( environment.baseUrl + "/favorite" ).pipe(
      map( ( _result: any ) => {
        // console.log(_result[0]);

        let productIds: any[] = [];
        _result[0].forEach( ( item: any ) => productIds.push( item.id ) );
        return productIds
      } )
    )
  }

  addToWishList( id: number ): Observable<any> {
    this.getAuth();
    return this.http.post( environment.baseUrl + `/favorite/add/${id}`, {} );
  }

  deleteFromWishList( id: number ): Observable<any> {
    return this.http.get( environment.baseUrl + `/favorite/delete/${id}`, {} );
  }

  getAuth() {
    const token = localStorage.getItem( 'access_token' );
    // when key is not local
    if ( token == null ) {
      localStorage.setItem( "access_token", "" ); //to initialize token if user don't login
      this.router.navigate( ['/login'] );
    }
    else if ( token == "" ) {
      this.router.navigate( ['/login'] );
    }
  }

}



