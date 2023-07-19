import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiscountProduct } from 'src/app/interfaces/Admin/discount';
import { DiscountService } from 'src/app/services/Admin/discount.service';

@Component( {
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.css']
} )
export class DiscountsComponent implements OnInit {
  discount: DiscountProduct[] = [];
  valid: boolean = false;
  responseMsg: any;
  idCheckAlert = '';


  constructor( private service: DiscountService, private router: Router ) { }
  ngOnInit() {
    this.getDiscount()
  }

  getDiscount() {
    this.discount = [];
    this.service.getDiscount().subscribe( ( res: any ) => {
      this.discount = res
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } );
  }

  deleteDiscount( discId: string ) {
    this.service.deleteDiscount( discId ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.success == true ) {
        this.valid = false;
        this.getDiscount();
      }
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } );
  }


}
