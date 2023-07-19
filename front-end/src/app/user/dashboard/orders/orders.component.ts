import { Component } from '@angular/core';
import { AllOrder } from 'src/app/interfaces/dashboard';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {
  userOrders: AllOrder[] = [];
  isLoading: boolean = true;

  constructor(private server: DashboardService) {}
  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    const token = localStorage.getItem('access_token');
    this.server.getUserOrders(token).subscribe((result:any) => {
      this.userOrders = result;
      this.isLoading = false;
    });
  }
}
