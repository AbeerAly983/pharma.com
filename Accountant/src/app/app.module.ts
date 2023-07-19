import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { VerificationComponent } from './auth/verification/verification.component';
import { ProfileAccountantComponent } from './Accountant/profile-accountant/profile-accountant.component';
import { SidebarAccountantComponent } from './Accountant/sidebar-accountant/sidebar-accountant.component';
import { DeliverdOrderComponent } from './Accountant/deliverd-order/deliverd-order.component';
import { PindingOrderComponent } from './Accountant/pinding-order/pinding-order.component';
import { CanceledQuantComponent } from './Accountant/canceled-quant/canceled-quant.component';
import { CanceledOrderComponent } from './Accountant/canceled-order/canceled-order.component';
import { AddCanceledQuantComponent } from './Accountant/canceled-quant/add-canceled-quant/add-canceled-quant.component';
import { HeaderInterceptor } from './interceptor/header.interceptor';

@NgModule( {
  declarations: [
    AppComponent,
    NotfoundComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    VerificationComponent,
    ProfileAccountantComponent,
    SidebarAccountantComponent,
    DeliverdOrderComponent,
    PindingOrderComponent,
    CanceledQuantComponent,
    CanceledOrderComponent,
    AddCanceledQuantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [
    {
      provide :HTTP_INTERCEPTORS ,
      useClass :HeaderInterceptor ,
      multi :true
    }
  ],
  bootstrap: [AppComponent],
} )
export class AppModule { }
