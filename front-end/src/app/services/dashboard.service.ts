import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}
  getUserOrders(token: any) {
    return this.http.get(environment.baseUrl+'/showOrders', {  });
  }
  getUserPending(token: any) {
    return this.http.get(environment.baseUrl+'/showPendingOrders', { });
  }
  getUserShipping(token: any) {
    return this.http.get(environment.baseUrl+'/showShipped', { });
  }
}
