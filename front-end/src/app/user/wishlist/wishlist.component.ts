import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CartService } from 'src/app/services/cart.service';
import { Wishlist } from 'src/app/interfaces/wishlist';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  wishList :Wishlist[] = [];
  isLoading: boolean = true;

  constructor(private _UserService : UserService, private _CartService : CartService){
    this.getWishList();
  }

  getWishList(){
    this._UserService.wishList().subscribe({
      next : (res)=> {
        this.wishList = res[0] ;
      this.isLoading = false;
      } ,
      error: (err)=> console.log(err)
    })
  }

  deleteFromWishList( productId: number ) {
    this._UserService.deleteFromWishList( productId ).subscribe( {
      next: ( response ) => {
        this._UserService.numberOfWishListItems.next(response.numOfFavoriteItems) ;
        console.log(response);
        this.getWishList();
      },
      error: ( err ) => console.log(err),
    } )
  }

  addtoCart( productId: number ) {
    this._CartService.addToCart( productId ).subscribe( {
      next: ( response ) => {
        this._CartService.numberOfCartItems.next(response.numOfCartItems) ;
      },
      error: ( err ) => console.log( err )
    } )
  }

}
