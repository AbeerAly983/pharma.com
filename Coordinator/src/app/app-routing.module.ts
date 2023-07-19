import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { VerificationComponent } from './auth/verification/verification.component';
import { ProfileCoordComponent } from './OrderCoordinator/components/profile-coord/profile-coord.component';
import { OrdersComponent } from './OrderCoordinator/components/orders/orders.component';
import { ShippedOrdersComponent } from './OrderCoordinator/components/shipped-orders/shipped-orders.component';
import { OrderOneUserComponent } from './OrderCoordinator/components/order-one-user/order-one-user.component';
import { UsersComponent } from './OrderCoordinator/components/users/users.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'verification', component: VerificationComponent },
  { path: 'resetPassword', component: ResetPasswordComponent },
  { path: 'orderCoordinator/profile', component: ProfileCoordComponent },
  { path: 'orderCoordinator/orders', component: OrdersComponent },
  { path: 'orderCoordinator/users', component: UsersComponent },
  { path: 'orderCoordinator/shippedOrders', component: ShippedOrdersComponent },
  { path: 'orderCoordinator/users/order/:id', component: OrderOneUserComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule],
} )
export class AppRoutingModule { }
