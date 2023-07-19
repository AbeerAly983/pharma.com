import { Component } from '@angular/core';
import { shipped } from 'src/app/interfaces/dashboard';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-shipped',
  templateUrl: './shipped.component.html',
  styleUrls: ['./shipped.component.css', '../orders/orders.component.css'],
})
export class ShippedComponent {
  isLoading: boolean = true;
  userShippedOrders: shipped[] = [];
  constructor(private server: DashboardService) {}
  ngOnInit(): void {
    this.getPendingOrders();
  }


  getPendingOrders() {
    const token = localStorage.getItem('access_token');
    this.server.getUserShipping(token).subscribe((result:any) => {
      this.userShippedOrders = result;
      this.isLoading = false;
    });
  }
}
