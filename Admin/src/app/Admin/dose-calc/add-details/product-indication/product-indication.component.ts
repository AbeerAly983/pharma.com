import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoseCalc, indication } from 'src/app/interfaces/Admin/dose-calc';
import { DoseCalcService } from 'src/app/services/Admin/dose-calc.service';

@Component( {
  selector: 'app-product-indication',
  templateUrl: './product-indication.component.html',
  styleUrls: ['./product-indication.component.css']
} )
export class ProductIndicationComponent {
  responseMsg: any;
  valid: boolean = false;
  dose: DoseCalc[] = []
  id: number | any;
  constructor( private service: DoseCalcService, private router: Router, private route: ActivatedRoute ) {
    const idParam = this.route.snapshot.paramMap.get( 'id' );
    this.id = idParam ? Number( idParam ) : 0; // Use a default value of 0 if the id parameter is not present

  }

  ngOnInit(): void {
    this.getDose()
  }

  getDose() {
    this.service.getDoseCal().subscribe( ( res: any ) => {
      this.dose = res;
    } );
  }

  // send updating data
  onsubmit( data: indication ) {
    const selectElement = document.getElementById( "mySelect" ) as HTMLSelectElement;
    this.service.addIndication( selectElement.value, data ).subscribe( ( data ) => {

      this.responseMsg = data;

      this.valid = true;
      setTimeout( () => { this.valid = false; }, 2000 );
      this.clearData();
    },
      ( error ) => {
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
