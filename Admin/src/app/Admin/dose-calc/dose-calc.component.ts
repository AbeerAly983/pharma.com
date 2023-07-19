import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DoseCalc } from 'src/app/interfaces/Admin/dose-calc';
import { DoseCalcService } from 'src/app/services/Admin/dose-calc.service';

@Component( {
  selector: 'app-dose-calc',
  templateUrl: './dose-calc.component.html',
  styleUrls: ['./dose-calc.component.css']
} )
export class DoseCalcComponent {
  calculator: DoseCalc[] = []
  valid: boolean = false;
  responseMsg: any;
  idCheckAlert: number | undefined;
  constructor( private service: DoseCalcService,private router: Router ) {
  }
  ngOnInit() {
    this.getDoseCalc()
  }
  getDoseCalc() {
    this.service.getDoseCal().subscribe( ( result: any ) => {
      this.calculator = result
    } )
  }
  deleteProductCase( caseId: number ,data:any) {
    this.service.deleteProductCase( caseId,data).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.message == 'success' ) {
        this.valid = false;
        this.getDoseCalc()

      }
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } );
  }


}
