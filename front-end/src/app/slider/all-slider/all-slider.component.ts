import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SliderService } from '../../services/slider.service';
import { UserService } from 'src/app/services/user.service';
import { ProductDiscount } from 'src/app/interfaces/product-discount';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-all-slider',
  templateUrl: './all-slider.component.html',
  styleUrls: ['./all-slider.component.css'],
})
export class AllSliderComponent {
  discountProducts: ProductDiscount[] = [];
  allproduct: Product[] = [];
  newProduct: Product[] = [];
  wishList:  number[] = [];

  constructor(private service: SliderService , private _UserService : UserService) {}
  ngOnInit(): void {
    this.getProduct();
    this.loadWishList() ;
    this.getdiscounts();
    this.getNew();

  }

  Options: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  getdiscounts() {
    this.service.getdiscounts().subscribe((result: any) => {
      this.discountProducts = result;
    });
  }
  getProduct() {
    this.service.getProduct().subscribe((result: any) => {
      this.allproduct = result;

    });
  }

  loadWishList(){
    this._UserService.getWishList().subscribe(productIds =>{
      this.wishList = productIds ;

    } )
  }

  getNew() {
    this.service.getNew().subscribe((result: any) => {
      this.newProduct = result;
    });
  }
}
