import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {dose_of_products, indication } from 'src/app/interfaces/Admin/dose-calc';
import { DoseCalcService } from 'src/app/services/Admin/dose-calc.service';

@Component({
  selector: 'app-update-product-dose',
  templateUrl: './update-product-dose.component.html',
  styleUrls: ['./update-product-dose.component.css']
})
export class UpdateProductDoseComponent {
  responseMsg: any;
  productDose!: dose_of_products ;
  indication: indication[] = []
  indicationId = '';
  valid: boolean = false;

  constructor( private service: DoseCalcService, private router: Router, private activeRouter: ActivatedRoute ) {
    this.activeRouter.paramMap.subscribe( ( params: ParamMap ) => {
      this.indicationId = params.get( 'id' )!;
    } );
  }
  ngOnInit(): void {
    this.getIndication()
    this.getOneIndication();

  }


  // send updating data
  onsubmit( data: dose_of_products ) {
    const formData = new FormData();
    formData.append( 'indication_id', data.indication_id );
    formData.append( 'min_age', data.min_age );
    formData.append( 'max_age', data.max_age );
    formData.append( 'min_weight', data.min_weight );
    formData.append( 'max_weight', data.max_weight );
    formData.append( 'dose', data.dose );
    this.service.editProductDose(  this.indicationId,formData).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.message == 'success' ) {
        this.valid = true;
        setTimeout( () => { this.valid = false; }, 2000 );
      }

    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } );
  }


  getIndication() {
    this.service.getAllIndication().subscribe( ( res: any ) => {
      this.indication = res;
    } );
  }
  getOneIndication() {
    this.service.getProductDoseId( this.indicationId ).subscribe( ( data: any ) => {
      this.productDose = data;
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } );
  }

  }
