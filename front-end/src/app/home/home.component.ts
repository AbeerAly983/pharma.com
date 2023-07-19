import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { HomeService } from 'src/app/services/home.service';
import { UserService } from 'src/app/services/user.service';
import {Announcement}from '../interfaces/announcement'
import {Product}from '../interfaces/product'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css' , '../slider/all-products/all-products.component.css']
})
export class HomeComponent {
  announcements :Announcement [] =[];
  discounts  : number = 0  ;
  allProducts: Product[] = [];
  wishList:  number[] = [];
  addToWishList  :boolean = false ;

  searchTerm: string = '';
  showAllSlider: boolean = true;
  showSearchResults: boolean = false;
  noResults: boolean = false; // Define the noResults variable

  showSuccessMessage: boolean = false;
  showAddMessage : boolean= false;
  showDeleteMessage : boolean= false;

  isLoading: boolean = true;

  constructor (private _HomeService : HomeService ,
      private _CartService : CartService ,
      private _UserService : UserService ,
      private _Router : Router){
        if((localStorage.getItem('access_token') === '')){
          this._Router.navigate(['/home'])
        }
       }

  ngOnInit(): void {
    this.getAnnouncments();
    this.getDiscount();
    this.getAllProducts();
    this.loadWishList() ;
  }

  getAnnouncments() {
    this._HomeService.getAllAnnouncments().subscribe((res:Announcement[]) =>{
      this.announcements = res ;
      this.isLoading = false;
    })
  }

  getDiscount (){
    this._HomeService.getMaxDiscounts().subscribe((res:number) =>{
      this.discounts = res ;
      this.isLoading = false;
    })
  }

  getAllProducts(){
    this._HomeService.getAllProducts().subscribe({
      next:(res:Product[])=> {
        this.allProducts = res ;
        this.isLoading = false;
      },
      error:(err)=> console.log(err)
    })
  }

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
        console.log( "Product deleted successfully" );
        this.addToWishList = false ;
        this.showDeleteMessage = true;
        setTimeout(() => {
          this.showDeleteMessage = false;
        }, 2000);
      },
      error: ( err ) => console.log( err ),
    } )
  }

  loadWishList(){
    this._UserService.getWishList().subscribe(productIds =>{
      this.wishList = productIds ;
      this.isLoading = false;
    } )
  }

}

