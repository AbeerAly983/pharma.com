import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component( {
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: [
    './single-category.component.css',
    '../../Slider/all-products/all-products.component.css',
  ],
} )
export class SingleCategoryComponent {
  @Input() product!: Product ;
  @Input() addToWishList  :boolean = false ;
  showSuccessMessage = false;
  showAddMessage = false;
  showDeleteMessage = false;

  constructor( private _CartService: CartService , private _UserService :UserService ) { }

  ngOnInit(): void {}
  addtoCart( productId: number ) {
    this._CartService.addToCart( productId ).subscribe( {
      next: ( response ) => {
        this._CartService.numberOfCartItems.next(response.numOfCartItems) ;
        this.showSuccessMessage = true;
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 2000);
      },
      error: ( err ) => console.log( err )
    } )
  }

  addtoWishList( productId: number ) {
    this._UserService.addToWishList( productId ).subscribe( {
      next: ( response ) => {
        this._UserService.numberOfWishListItems.next(response.numOfFavoriteItems) ;
        this.addToWishList = true ;
        this.showAddMessage = true;
        setTimeout(() => {
          this.showAddMessage = false;
        }, 2000);
      },
      error: ( err ) => console.log( err )
    } )
  }

  deleteFromWishList( productId: number ) {
    console.log( "Deleting product with id: ", productId );
    this._UserService.deleteFromWishList( productId ).subscribe( {
      next: ( response ) => {
        this._UserService.numberOfWishListItems.next(response.numOfFavoriteItems) ;
        this.addToWishList =false ;
        this.showDeleteMessage = true;
        setTimeout(() => {
          this.showDeleteMessage = false;
        }, 2000);
      },
      error: ( err ) => console.log( err ),
    } )
  }

}
