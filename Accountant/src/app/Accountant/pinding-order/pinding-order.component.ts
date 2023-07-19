import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersAcc } from 'src/app/interfaces/Accountant/orders-acc';
import { PindingOrderService } from 'src/app/services/Accountant/pinding-order.service';

@Component({
  selector: 'app-pinding-order',
  templateUrl: './pinding-order.component.html',
  styleUrls: ['./pinding-order.component.css']
})
export class PindingOrderComponent {

  pending: OrdersAcc[] = [];
  responseMsg: any;
  valid: boolean = false;
  cancel:boolean=false
  idCancelAlert: number | undefined;
  idCheckAlert: number | undefined;
  constructor( private service: PindingOrderService, private router: Router ) { }


  ngOnInit() {
    this.getPindingOrder();

  }

  getPindingOrder() {
    this.service.getPindingOrder().subscribe( ( res: any ) => {
      this.pending = res;
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } );
  }
  deliverOrder( orderId: number) {
    this.service.PostDeliveredOrder( orderId,this.deliverOrder ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.success == true ) {
        this.valid = false;
        this.getPindingOrder();
      }
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      }
      );
  }
  cancelOrder( orderId: number) {
    this.service.PostCancelOrder( orderId,this.deliverOrder ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.success == true ) {
        this.valid = false;
        this.getPindingOrder();
      }
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      }
      );
  }
}
