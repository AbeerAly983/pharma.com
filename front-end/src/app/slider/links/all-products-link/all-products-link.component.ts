import { Component, OnInit } from '@angular/core';
import { SliderService } from '../../../services/slider.service';
import { UserService } from 'src/app/services/user.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-all-products-link',
  templateUrl: './all-products-link.component.html',
  styleUrls: ['./all-products-link.component.css'],
})
export class AllProductsLinkComponent implements OnInit {
  allproduct: Product[] = [];
  wishList:  number[] = [];
  isLoading: boolean = true;

  constructor(private service: SliderService , private _UserService : UserService) {}

  ngOnInit(): void {
    this.getProduct();
    this.loadWishList();
  }

  getProduct() {
    this.service.getProduct().subscribe((result: any) => {
      this.allproduct = result;
      this.isLoading = false;

    });
  }

  loadWishList(){
    this._UserService.getWishList().subscribe(productIds =>{
      this.wishList = productIds ;
    } )
  }

}
