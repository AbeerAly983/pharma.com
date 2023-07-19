import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DoseCalc } from 'src/app/interfaces/Admin/dose-calc';
import { DoseCalcService } from 'src/app/services/Admin/dose-calc.service';

@Component({
  selector: 'app-update-product-case',
  templateUrl: './update-product-case.component.html',
  styleUrls: ['./update-product-case.component.css']
})
export class UpdateProductCaseComponent {
  responseMsg: any;
  productCase!: DoseCalc ;
  productId = '';
  valid: boolean = false;

  constructor( private service: DoseCalcService, private router: Router, private activeRouter: ActivatedRoute ) {
    this.activeRouter.paramMap.subscribe( ( params: ParamMap ) => {
      this.productId = params.get( 'id' )!;
    } );
  }
  ngOnInit(): void {

    this.getOneProductCase();

  }


  // send updating data
  onsubmit( data: DoseCalc ) {
    const formData = new FormData();
    formData.append( 'ProductName', data.ProductName );
    formData.append( 'composition', data.composition );
    formData.append( 'pregnancy', data.pregnancy );
    formData.append( 'lactation', data.lactation );
    formData.append( 'more_trade_names', data.more_trade_names );
    this.service.editProductCase(  this.productId,formData).subscribe( ( data ) => {
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

  getOneProductCase() {
    this.service.getProductCaseId( this.productId ).subscribe( ( data: any ) => {
      this.productCase = data;
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } );
  }

  }
