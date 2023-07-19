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
import { ProfileCoordComponent } from './OrderCoordinator/components/profile-coord/profile-coord.component';
import { SidebarCoordComponent } from './OrderCoordinator/components/sidebar-coord/sidebar-coord.component';
import { OrdersComponent } from './OrderCoordinator/components/orders/orders.component';
import { ShippedOrdersComponent } from './OrderCoordinator/components/shipped-orders/shipped-orders.component';
import { OrderOneUserComponent } from './OrderCoordinator/components/order-one-user/order-one-user.component';
import { HeaderInterceptor } from './OrderCoordinator/interceptor/header.interceptor';
import { UsersComponent } from './OrderCoordinator/components/users/users.component';

@NgModule( {
  declarations: [
    AppComponent,
    NotfoundComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    VerificationComponent,
    ProfileCoordComponent,
    SidebarCoordComponent,
    OrdersComponent,
    ShippedOrdersComponent,
    OrderOneUserComponent,
    UsersComponent,
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
