import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DoseCalc } from 'src/app/interfaces/Admin/dose-calc';
import { DoseCalcService } from 'src/app/services/Admin/dose-calc.service';

@Component( {
  selector: 'app-store-product',
  templateUrl: './store-product.component.html',
  styleUrls: ['./store-product.component.css']
} )
export class StoreProductComponent {
  responseMsg: any;

  valid: boolean = false;
  invalid: boolean = false;
  constructor( private service: DoseCalcService, private router: Router ) { }


  // send updating data
  onsubmit( data: DoseCalc ) {
    this.service.addProduct( data ).subscribe( ( data ) => {
      this.responseMsg = data;
      this.valid = true;
      setTimeout( () => { this.valid = false; }, 2000 );
      this.clearData();

    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } );
  }

  clearData() {
    let Inputs = document.querySelectorAll<HTMLInputElement>( ".input" );
    for ( let index = 0; index < Inputs.length; index++ ) {
      Inputs[0].focus();
      Inputs[index].value = "";
    }
  }
}
