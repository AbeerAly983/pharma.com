import { Component } from '@angular/core';
import { pending } from 'src/app/interfaces/dashboard';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css', '../orders/orders.component.css'],
})
export class PendingComponent {

  isLoading: boolean = true;
  userPendingOrders: pending[] = [];
  constructor(private server: DashboardService) {}
  ngOnInit(): void {
    this.getPendingOrders();
  }


  getPendingOrders() {
    const token = localStorage.getItem('access_token');
    this.server.getUserPending(token).subscribe((result:any) => {
      this.userPendingOrders = result;
      this.isLoading = false;
    });
  }

}
