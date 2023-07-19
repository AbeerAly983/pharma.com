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
import { ProfileComponent } from './Owner/profile/profile.component';
import { SidebarOwnerComponent } from './Owner/sidebar-owner/sidebar-owner.component';
import { UsersComponent } from './Owner/components/users/users.component';
import { NewUsersComponent } from './Owner/components/new-users/new-users.component';
import { ProductsComponent } from './Owner/components/products/products.component';
import { AdminsComponent } from './Owner/components/admins/admins.component';
import { OrderCoordinatorsComponent } from './Owner/components/order-coordinators/order-coordinators.component';
import { AccountantsComponent } from './Owner/components/accountants/accountants.component';
import { LaboratoriesComponent } from './Owner/components/laboratories/laboratories.component';
import { DoctorsComponent } from './Owner/components/doctors/doctors.component';
import { NewsComponent } from './Owner/components/news/news.component';
import { OrdersComponent } from './Owner/components/orders/orders.component';
import { LiveSessionsComponent } from './Owner/components/live-sessions/live-sessions.component';
import { AddAdminComponent } from './Owner/components/add-admin/add-admin.component';
import { DeliverOrderComponent } from './Owner/components/deliver-order/deliver-order.component';
import { CanceledOrderComponent } from './Owner/components/canceled-order/canceled-order.component';
import { NotdeliveredOrderComponent } from './Owner/components/notdelivered-order/notdelivered-order.component';
import { NotificationComponent } from './Owner/components/notification/notification.component';
import { ChartsComponent } from './Owner/components/charts/charts.component';
import { TopOrderComponent } from './Owner/components/top-order/top-order.component';
import { TopSalesComponent } from './Owner/components/top-sales/top-sales.component';
import { TopCanceledComponent } from './Owner/components/top-canceled/top-canceled.component';
import { LastYearSalesComponent } from './Owner/components/last-year-sales/last-year-sales.component';
import { LastYearOrdersComponent } from './Owner/components/last-year-orders/last-year-orders.component';
import { LastYearUsersComponent } from './Owner/components/last-year-users/last-year-users.component';
import { ChartModule } from 'angular-highcharts';
import { TopPendingComponent } from './Owner/components/top-pending/top-pending.component';
import { HeaderInterceptor } from './interceptors/header.interceptor';

@NgModule( {
  declarations: [
    AppComponent,
    NotfoundComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    VerificationComponent,
    ProfileComponent,
    SidebarOwnerComponent,
    UsersComponent,
    NewUsersComponent,
    ProductsComponent,
    AdminsComponent,
    OrderCoordinatorsComponent,
    AccountantsComponent,
    LaboratoriesComponent,
    DoctorsComponent,
    NewsComponent,
    OrdersComponent,
    LiveSessionsComponent,
    AddAdminComponent,
    DeliverOrderComponent,
    CanceledOrderComponent,
    NotdeliveredOrderComponent,
    NotificationComponent,
    ChartsComponent,
    TopOrderComponent,
    TopSalesComponent,
    TopCanceledComponent,
    LastYearSalesComponent,
    LastYearOrdersComponent,
    LastYearUsersComponent,
    TopPendingComponent,
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
    ChartModule,

  ],
  providers: [
    {
      provide :HTTP_INTERCEPTORS ,
      useClass:HeaderInterceptor ,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
} )
export class AppModule { }
