import { Component, OnInit } from '@angular/core';
import { SliderService } from '../../../services/slider.service';
import { UserService } from 'src/app/services/user.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-all-news-link',
  templateUrl: './all-news-link.component.html',
  styleUrls: [
    './all-news-link.component.css',
    '../all-products-link/all-products-link.component.css',
  ],
})
export class AllNewsLinkComponent implements OnInit {
  allnews: Product[] = [];
  isLoading: boolean = true;
  wishList:  number[] = [];

  constructor(private service: SliderService , private _UserService :UserService) {}
  ngOnInit(): void {
    this.getNew();
    this.loadWishList();
  }

  getNew() {
    this.service.getNew().subscribe((result: any) => {
      this.allnews = result;
      this.isLoading = false;
    });
  }


  loadWishList(){
    this._UserService.getWishList().subscribe(productIds =>{
      this.wishList = productIds ;

    } )
  }

}
