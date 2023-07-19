import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { dose_of_products, indication } from 'src/app/interfaces/Admin/dose-calc';
import { DoseCalcService } from 'src/app/services/Admin/dose-calc.service';

@Component( {
  selector: 'app-product-dose',
  templateUrl: './product-dose.component.html',
  styleUrls: ['./product-dose.component.css']
} )
export class ProductDoseComponent {
  responseMsg: any;
  valid: boolean = false;
  doseCal!: dose_of_products;
  productIndicate: indication[] = [];
  id: number;
  constructor( private service: DoseCalcService, private router: Router, private route: ActivatedRoute ) {
    const idParam = this.route.snapshot.paramMap.get( 'id' );
    this.id = idParam ? Number( idParam ) : 0; // Use a default value of 0 if the id parameter is not present
  }

  ngOnInit(): void {
    this.getDose();
    this.getAllIndication();
  }

  getDose() {
    this.service.getDoseCal().subscribe( ( res: any ) => {
      this.doseCal = res;
    } );
  }

  getAllIndication() {
    this.service.getAllIndication().subscribe( ( data: any ) => {
      this.productIndicate = data;

    } );
  }

  // send add data
  onsubmit( data: dose_of_products ) {
    const selectElement = document.getElementById( "mySelect" ) as HTMLSelectElement;
    this.service.addDose( selectElement.value, data ).subscribe( ( data ) => {
      this.responseMsg = data;
      this.valid = true;
      setTimeout( () => {
        this.valid = false;
      }, 2000 );
      this.clearData();
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
