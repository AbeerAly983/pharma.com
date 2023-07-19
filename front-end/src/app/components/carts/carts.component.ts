import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { Cart } from '../../interfaces/cart';
import { deleteCart } from '../../interfaces/cart';

@Component( {
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css'],
} )
export class CartsComponent {

  cartList!: Cart
  price: any = [] ;
  length : number = 0 ;
  isLoading: boolean = true ;

  constructor( private _CartService: CartService, private _Router: Router, private _cdRef: ChangeDetectorRef ) { }

  getCartDetails() {
    this._CartService.getLoggedUserCart().subscribe( {
      next: ( repsonse:Cart ) => {
        this.cartList = repsonse;
        this.isLoading = false;
      },
      error: ( err ) => console.log( err )
    } )
  }

  deleteFromCart( productId: number ) {
    console.log( "Deleting product with id: ", productId );
    this._CartService.deleteFromCart( productId ).subscribe( {
      next: ( response:deleteCart ) => {
        this._CartService.numberOfCartItems.next(response.numOfCartItems) ;
        this.getCartDetails();
      },
      error: ( err ) => console.log( err ),
    } )
  }
  deleteAllFromCart() {
    this._CartService.deleteAllFromCart().subscribe( {
      next: ( response : deleteCart) => {
        this._CartService.numberOfCartItems.next(response.numOfCartItems) ;
        this.getCartDetails();
      },
      error: ( err ) => console.log( err ),
    } )
  }

  increaseCounter( productId: number ) {
    this._CartService.increaseCounter( productId ).subscribe( {
      next: ( response :null) => {
        this.getCartDetails();
      },
      error: ( err ) => console.log( err ),
    } )
  }

  decreaseCounter( productId: number ) {
    this._CartService.decreaseCounter( productId ).subscribe( {
      next: ( response:null ) => {
        this.getCartDetails();
      },
      error: ( err ) => console.log( err ),
    } )
  }


  ngOnInit(): void {
    this.getCartDetails();

  }

}
