import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { calculator, dose_of_products } from 'src/app/interfaces/Admin/dose-calc';
import { DoseCalc } from 'src/app/interfaces/Admin/dose-calc';
import { DoseCalcService } from 'src/app/services/Admin/dose-calc.service';

@Component({
  selector: 'app-edit-dose',
  templateUrl: './edit-dose.component.html',
  styleUrls: ['./edit-dose.component.css']
})
export class EditDoseComponent {
  id=''
  calculator:calculator[]=[]
  product!:DoseCalc
  valid: boolean = false;
  responseMsg: any;
  idCheckAlert: number | undefined;


  constructor( private service: DoseCalcService,private router: Router, private activeRouter: ActivatedRoute ) {
    this.activeRouter.paramMap.subscribe( ( params: ParamMap ) => {
      this.id = params.get( 'id' )!;
    } );
  }
  ngOnInit() {
    this.getDose();
    this.getProductCase();
  }
  getDose() {
    this.service.getproductDose(this.id).subscribe( ( result: any ) => {
      this.calculator = result;

    } )
  }

  getProductCase() {
    this.service.getProductCase(this.id).subscribe( ( result: any ) => {
      this.product = result
    } )
  }

  deleteIndication( indicationId: number ,data:any) {
    this.service.deleteProductIndication( indicationId,data).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.message == 'success' ) {
        this.valid = false;
        this.getDose()
      }
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } );
  }

  deleteDose( doseId: number ,data:any) {
    this.service.deleteDose( doseId,data).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.message == 'success' ) {
        this.getDose()
      }
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } );
  }

}
