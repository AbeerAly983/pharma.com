import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { Cart } from '../interfaces/cart';
import { deleteCart } from '../interfaces/cart';

@Injectable( {
  providedIn: 'root'
} )
export class CartService implements OnInit {

  numberOfCartItems  = new BehaviorSubject<number>(0);
  numOfCartItems : number =0

  constructor( private _HttpClient: HttpClient, private router: Router ) {
    this.getLoggedUserCart().subscribe({
      next:(res)=>{
        this.numOfCartItems = res.numOfCartItems
        this.numberOfCartItems.next(this.numOfCartItems) ;
      } ,
      error :(err)=> console.log(err)
    })
  }
  ngOnInit(): void { }

  addToCart( productId: number ): Observable<any> {
    this.getAuth();
    return this._HttpClient.post( environment.baseUrl+`/cart/add/${productId}`, {} );
  }

  getLoggedUserCart(): Observable<Cart> {
    this.getAuth();
    return this._HttpClient.get <Cart> ( environment.baseUrl+`/cart`,{} );
  }

  deleteFromCart( id: number ): Observable<deleteCart> {
    return this._HttpClient.get<deleteCart>( environment.baseUrl+`/cart/delete/${id}`, {  } );
  }

  deleteAllFromCart(): Observable<deleteCart> {
    return this._HttpClient.get<deleteCart>( environment.baseUrl+`/cart/delete`, {  } );
  }

  increaseCounter( id: number ): Observable<null> {
    return this._HttpClient.post<null>( environment.baseUrl+`/cart/increase/${id}`, {} );
  }

  decreaseCounter( id: number ): Observable<null> {
    return this._HttpClient.post<null>( environment.baseUrl+`/cart/decrease/${id}`, {} );
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
