import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/Admin/product_type';
import { ProductService } from 'src/app/services/Admin/product.service';

@Component( {
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
} )
export class ProductsComponent implements OnInit {

  allProduct: Product[] = [];
  responseMsg: any;

  constructor( private service: ProductService, private router: Router ) { }


  ngOnInit() {
    this.getProduct();

  }

  getProduct() {
    this.service.getProduct().subscribe( ( res: any ) => {
      this.allProduct = res;
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } );
  }

  deleteProduct( id: number ) {
    this.service.deleteProduct( id ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.sucess == true ) {
        this.getProduct();
      }
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      }

    );
  }

}
