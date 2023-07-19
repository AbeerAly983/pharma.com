import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { numberOfProduct, product } from 'src/app/interfaces/Owner/product';
import { ProductService } from 'src/app/services/Owner/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor( private service: ProductService, private router: Router ) { }
  productStats!: numberOfProduct;
  productAll: product[] = [];
  productYear: product[] = [];
  productMonth: product[] = [];
  productDay: product[] = [];

  getProductStats() {
    this.service.getTotalNumbersOfProducts().subscribe( ( data: any ) => {
      this.productStats = data;

    } , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    })
  }
  getProductAll() {
    this.service.getAllProducts().subscribe( ( data: any ) => {
      this.productAll = data;
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }
  getProductYear() {
    this.service.getAllProductsYear().subscribe( ( data: any ) => {
      this.productYear = data;
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }
  getProductMonth() {
    this.service.getAllProductsMonth().subscribe( ( data: any ) => {
      this.productMonth = data;
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }
  getProductDay() {
    this.service.getAllProductsToday().subscribe( ( data: any ) => {
      this.productDay = data;
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }

  ngOnInit(): void {
    this.getProductStats();
    this.getProductAll();
    this.getProductYear();
    this.getProductMonth();
    this.getProductDay();
  }

  showAll: boolean = false;
  showToday: boolean = false;
  showMonth: boolean = false;
  showYear: boolean = false;
  showBack: boolean = false;


  // show div of all Doctor
  showDoctorAll() {
    this.showAll = true;
    this.showToday = false;
    this.showMonth = false;
    this.showYear = false;
    this.showBack = true;
  }

  // show div of Doctor add in today
  showDoctorToday() {
    this.showToday = true;
    this.showAll = false;
    this.showMonth = false;
    this.showYear = false;
    this.showBack = true;
  }

  // show div of Doctor add in month
  showDoctorMonth() {
    this.showMonth = true;
    this.showAll = false;
    this.showToday = false;
    this.showYear = false;
    this.showBack = true;
  }

  // show div of Doctor add in year
  showDoctorYear() {
    this.showYear = true;
    this.showAll = false;
    this.showToday = false;
    this.showMonth = false;
    this.showBack = true;
  }
}
