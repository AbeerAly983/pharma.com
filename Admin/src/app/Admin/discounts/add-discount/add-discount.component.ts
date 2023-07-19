import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscountService } from 'src/app/services/Admin/discount.service';
import { ProductService } from 'src/app/services/Admin/product.service';
import { Product } from 'src/app/interfaces/Admin/product_type';
import { HttpClient } from '@angular/common/http';

@Component( {
  selector: 'app-add-discount',
  templateUrl: './add-discount.component.html',
  styleUrls: ['./add-discount.component.css']
} )
export class AddDiscountComponent {
  responseMsg: any;
  valid: boolean = false;
  discount: Product[] = []
  id = '';
  constructor( private service: DiscountService, private product: ProductService, private router: Router, private route: ActivatedRoute ) {
    this.id = this.route.snapshot.paramMap.get( 'id' )!;
  }

  ngOnInit(): void {
    this.getProduct()

  }

  getProduct() {
    this.product.getProduct().subscribe( ( res: any ) => {
      this.discount = res.filter( ( product: Product ) => product.discount === null || product.discount === undefined )
        .map( ( product: Product ) => product.id );
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    }
    );
  }

  // send updating data
  onsubmit( data: any ) {
    const selectElement = document.getElementById( "mySelect" ) as HTMLSelectElement;
    this.service.addDiscount( selectElement.value, data ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.success == true ) {
        this.valid = true;
        setTimeout( () => { this.valid = false; }, 2000 );
        this.clearData();
      }
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      }
    );
  }

  clearData() {
    let Inputs = document.querySelectorAll<HTMLInputElement>( ".mb-3 input" );
    for ( let index = 0; index < Inputs.length; index++ ) {
      Inputs[0].focus();
      Inputs[index].value = "";
    }
  }
}
