import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { cancel } from 'src/app/interfaces/Accountant/orders-acc';
import { PindingOrderService } from 'src/app/services/Accountant/pinding-order.service';

@Component({
  selector: 'app-add-canceled-quant',
  templateUrl: './add-canceled-quant.component.html',
  styleUrls: ['./add-canceled-quant.component.css']
})
export class AddCanceledQuantComponent {

  responseMsg: any;
  canceQuant!: cancel;

  orderId = '';
  valid: boolean = false;
  invalid: boolean = false;
  wrong:boolean=false

  constructor( private service: PindingOrderService, private router: Router, private activeRouter: ActivatedRoute ) {

  }
  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe( ( params: ParamMap ) => {
      this.orderId = params.get( 'order_id' )!;
    } );
  }



  // add data
  onsubmit( data: cancel ) {
    const formData = new FormData();
    formData.append( 'delivered_quantity', data.delivered_quantity );
    formData.append( 'canceled_quantity', data.canceled_quantity );
    this.service.PostCancelQuant(this.orderId, formData ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.success == true ) {
        this.valid = true;
        setTimeout( () => { this.valid = false; }, 2000 );
        this.clearData()
      }
      else if ( this.responseMsg.message == "zero value is not available" ) {
        this.invalid = true;
        setTimeout( () => { this.invalid = false; }, 2000 );

      }
      else if ( this.responseMsg.message == "total canceled and delivered quantity is not equal to quantitiy that this user required" ) {
        this.wrong = true;
        setTimeout( () => { this.wrong = false; }, 2000 );

      }
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } );
  }

  clearData() {
    let Inputs = document.querySelectorAll<HTMLInputElement>( ".mb-3 input" );
    for ( let index = 0; index < Inputs.length; index++ ) {
      Inputs[0].focus();
      Inputs[index].value = "";
    }
  }


}
