import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SliderService } from '../../services/slider.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../../services/cart.service';
import {ProductDetails}from '../../interfaces/product-details'
import {ProductDiscount}from '../../interfaces/product-discount'


@Component( {
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
} )
export class ProductDetailsComponent {

  discountProducts!: ProductDiscount;
  ProductDetails!: ProductDetails;
  detailsId: string |null ='';
  isLoading: boolean = true;

  constructor( private service: SliderService, private _CartService: CartService, private route: ActivatedRoute ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( ( params: ParamMap ) => {
      this.detailsId = params.get( 'id' );
    } );

    this.getdiscounts();
    this.getProductDetails();
  }


  getProductDetails() {
    this.service.getProductById( this.detailsId ).subscribe({
      next:(res  )=> {
        this.ProductDetails = res;
        this.isLoading = false;
      } ,
      error:(err)=> console.log(err)
    } );
  }

  getdiscounts() {
    this.service.getdiscounts().subscribe( ( result: any ) => {
      this.discountProducts = result;
      this.isLoading = false;
    } );
  }


  addtoCart( productId: any ) {
    this._CartService.addToCart( productId ).subscribe( {
      next: ( response ) => {
        this._CartService.numberOfCartItems.next(response.numOfCartItems) ;
      },
      error: ( err ) => console.log( err )
    } )
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true
  }
}
