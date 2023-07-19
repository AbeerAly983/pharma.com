import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { VerificationComponent } from './auth/verification/verification.component';
import { ProfileComponent } from './Owner/profile/profile.component';
import { UsersComponent } from './Owner/components/users/users.component';
import { NewUsersComponent } from './Owner/components/new-users/new-users.component';
import { ProductsComponent } from './Owner/components/products/products.component';
import { AdminsComponent } from './Owner/components/admins/admins.component';
import { OrderCoordinatorsComponent } from './Owner/components/order-coordinators/order-coordinators.component';
import { AccountantsComponent } from './Owner/components/accountants/accountants.component';
import { DoctorsComponent } from './Owner/components/doctors/doctors.component';
import { NewsComponent } from './Owner/components/news/news.component';
import { OrdersComponent } from './Owner/components/orders/orders.component';
import { LiveSessionsComponent } from './Owner/components/live-sessions/live-sessions.component';
import { LaboratoriesComponent } from './Owner/components/laboratories/laboratories.component';
import { AddAdminComponent } from './Owner/components/add-admin/add-admin.component';
import { DeliverOrderComponent } from './Owner/components/deliver-order/deliver-order.component';
import { CanceledOrderComponent } from './Owner/components/canceled-order/canceled-order.component';
import { NotdeliveredOrderComponent } from './Owner/components/notdelivered-order/notdelivered-order.component';
import { NotificationComponent } from './Owner/components/notification/notification.component';
import { ChartsComponent } from './Owner/components/charts/charts.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'verification', component: VerificationComponent },
  { path: 'resetPassword', component: ResetPasswordComponent },
  { path: 'owner/profile', canActivate: [AuthGuard], component: ProfileComponent },
  { path: 'owner/charts', canActivate: [AuthGuard], component: ChartsComponent },
  { path: 'owner/users', canActivate: [AuthGuard], component: UsersComponent },
  { path: 'owner/newUsers', canActivate: [AuthGuard], component: NewUsersComponent },
  { path: 'owner/Products', canActivate: [AuthGuard], component: ProductsComponent },
  { path: 'owner/Admins', canActivate: [AuthGuard], component: AdminsComponent },
  { path: 'owner/orderCoordinators', canActivate: [AuthGuard], component: OrderCoordinatorsComponent },
  { path: 'owner/Accountants', canActivate: [AuthGuard], component: AccountantsComponent },
  { path: 'owner/Laboratories', canActivate: [AuthGuard], component: LaboratoriesComponent },
  { path: 'owner/Doctors', canActivate: [AuthGuard], component: DoctorsComponent },
  { path: 'owner/News', canActivate: [AuthGuard], component: NewsComponent },
  { path: 'owner/Orders', canActivate: [AuthGuard], component: OrdersComponent },
  { path: 'owner/deliveredOrders', canActivate: [AuthGuard], component: DeliverOrderComponent },
  { path: 'owner/canceledOrders', canActivate: [AuthGuard], component: CanceledOrderComponent },
  { path: 'owner/notdeliveredOrders', canActivate: [AuthGuard], component: NotdeliveredOrderComponent },
  { path: 'owner/liveSessions', canActivate: [AuthGuard], component: LiveSessionsComponent },
  { path: 'owner/addAdmin', canActivate: [AuthGuard], component: AddAdminComponent },
  { path: 'owner/notification', canActivate: [AuthGuard], component: NotificationComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule],
} )
export class AppRoutingModule { }
