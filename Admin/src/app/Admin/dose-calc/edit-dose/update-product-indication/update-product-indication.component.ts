import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DoseCalc, indication } from 'src/app/interfaces/Admin/dose-calc';
import { DoseCalcService } from 'src/app/services/Admin/dose-calc.service';

@Component({
  selector: 'app-update-product-indication',
  templateUrl: './update-product-indication.component.html',
  styleUrls: ['./update-product-indication.component.css']
})
export class UpdateProductIndicationComponent {
  responseMsg: any;
  productIndication!: indication ;
  dose: DoseCalc[] = []
  productId = '';
  valid: boolean = false;

  constructor( private service: DoseCalcService, private router: Router, private activeRouter: ActivatedRoute ) {
    this.activeRouter.paramMap.subscribe( ( params: ParamMap ) => {
      this.productId = params.get( 'id' )!;
    } );
  }
  ngOnInit(): void {
    this.getDose()
    this.getOneIndication();

  }


  // send updating data
  onsubmit( data: indication ) {
    const formData = new FormData();
    formData.append( 'product_id', data.product_id );
    formData.append( 'indication', data.indication );
    this.service.editProductIndication(  this.productId,formData).subscribe( ( data ) => {
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


  getDose() {
    this.service.getDoseCal().subscribe( ( res: any ) => {
      this.dose = res;
    } );
  }
  getOneIndication() {
    this.service.getProductIndicationId( this.productId ).subscribe( ( data: any ) => {
      this.productIndication = data;
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } );
  }



  }
