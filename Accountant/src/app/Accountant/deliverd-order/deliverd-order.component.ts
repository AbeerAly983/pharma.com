import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersAcc } from 'src/app/interfaces/Accountant/orders-acc';
import { DeliveredOrderService } from 'src/app/services/Accountant/delivered-order.service';

@Component({
  selector: 'app-deliverd-order',
  templateUrl: './deliverd-order.component.html',
  styleUrls: ['./deliverd-order.component.css']
})
export class DeliverdOrderComponent {

  delivered: OrdersAcc[] = [];
  responseMsg: any;

  constructor( private service: DeliveredOrderService, private router: Router ) { }


  ngOnInit() {
    this.getDeliveredOrder();

  }

  getDeliveredOrder() {
    this.service.getDeliveredOrders().subscribe( ( res: any ) => {
      this.delivered = res;
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } );
  }

}
