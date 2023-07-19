import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { VerificationComponent } from './auth/verification/verification.component';
import { ProfileAccountantComponent } from './Accountant/profile-accountant/profile-accountant.component';
import { DeliverdOrderComponent } from './Accountant/deliverd-order/deliverd-order.component';
import { PindingOrderComponent } from './Accountant/pinding-order/pinding-order.component';
import { CanceledQuantComponent } from './Accountant/canceled-quant/canceled-quant.component';
import { CanceledOrderComponent } from './Accountant/canceled-order/canceled-order.component';
import { AddCanceledQuantComponent } from './Accountant/canceled-quant/add-canceled-quant/add-canceled-quant.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'verification', component: VerificationComponent },
  { path: 'resetPassword', component: ResetPasswordComponent },
  { path: 'accountant/profile', component: ProfileAccountantComponent },
  { path: 'accountant/delivered', component: DeliverdOrderComponent },
  { path: 'accountant/pinding', component: PindingOrderComponent },
  { path: 'accountant/cancelSomeQuantity', component: CanceledQuantComponent },
  { path: 'accountant/cancelOrder', component: CanceledOrderComponent },
  { path: 'accountant/cancelQuant/:order_id', component: AddCanceledQuantComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule],
} )
export class AppRoutingModule { }
