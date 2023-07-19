import { Component } from '@angular/core';
import { SliderService } from '../../../services/slider.service';
import { UserService } from 'src/app/services/user.service';
import { ProductDiscount } from 'src/app/interfaces/product-discount';

@Component({
  selector: 'app-all-poromotions-link',
  templateUrl: './all-poromotions-link.component.html',
  styleUrls: [
    './all-poromotions-link.component.css',
    '../all-products-link/all-products-link.component.css',
  ],
})
export class AllPoromotionsLinkComponent {
  allpromotions: ProductDiscount[] = [];
  isLoading: boolean = true;
  wishList:  number[] = [];

  constructor(private service: SliderService, private _UserService : UserService) {}
  ngOnInit(): void {
    this.getPromotion();
    this.loadWishList() ;
  }
  getPromotion() {
    this.service.getdiscounts().subscribe((result: any) => {
      this.allpromotions = result;
      this.isLoading = false;
    });
  }

  loadWishList(){
    this._UserService.getWishList().subscribe(productIds =>{
      this.wishList = productIds ;

    } )
  }

}
