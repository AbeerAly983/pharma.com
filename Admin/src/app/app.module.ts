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
import { ProfileComponent } from './Admin/profile/profile.component';
import { ProductsComponent } from './Admin/products/products.component';
import { DoctorsComponent } from './Admin/doctors/doctors.component';
import { LabsComponent } from './Admin/labs/labs.component';
import { DiscountsComponent } from './Admin/discounts/discounts.component';
import { AnnouncementsComponent } from './Admin/announcements/announcements.component';
import { OrderCoordinatorComponent } from './Admin/order-coordinator/order-coordinator.component';
import { AccountantComponent } from './Admin/accountant/accountant.component';
import { SidebarAdminComponent } from './Admin/sidebar-admin/sidebar-admin.component';
import { DoseCalcComponent } from './Admin/dose-calc/dose-calc.component';
import { AddOrderCoordinatorComponent } from './Admin/order-coordinator/add-order-coordinator/add-order-coordinator.component';
import { AddAccountantComponent } from './Admin/accountant/add-accountant/add-accountant.component';
import { AddDoctorComponent } from './Admin/doctors/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './Admin/doctors/edit-doctor/edit-doctor.component';
import { AddLabComponent } from './Admin/labs/add-lab/add-lab.component';
import { EditLabComponent } from './Admin/labs/edit-lab/edit-lab.component';
import { AddproductComponent } from './Admin/products/addproduct/addproduct.component';
import { EditproductComponent } from './Admin/products/editproduct/editproduct.component';
import { TypeComponent } from './Admin/type/type.component';
import { AddComponent } from './Admin/type/add/add.component';
import { EditComponent } from './Admin/type/edit/edit.component';
import { EditAnnounceComponent } from './Admin/announcements/edit-announce/edit-announce.component';
import { AddAnnounceComponent } from './Admin/announcements/add-announce/add-announce.component';
import { AddDiscountComponent } from './Admin/discounts/add-discount/add-discount.component';
import { EditDiscountComponent } from './Admin/discounts/edit-discount/edit-discount.component';
import { VerificationComponent } from './auth/verification/verification.component';
import { AddDetailsComponent } from './Admin/dose-calc/add-details/add-details.component';
import { StoreProductComponent } from './Admin/dose-calc/add-details/store-product/store-product.component';
import { ProductIndicationComponent } from './Admin/dose-calc/add-details/product-indication/product-indication.component';
import { ProductDoseComponent } from './Admin/dose-calc/add-details/product-dose/product-dose.component';
import { NewsComponent } from './Admin/news/news.component';
import { UpdateNewsComponent } from './Admin/news/update-news/update-news.component';
import { AddNewsComponent } from './Admin/news/add-news/add-news.component';
import { LiveSessionComponent } from './Admin/live-session/live-session.component';
import { AddLiveSessionComponent } from './Admin/live-session/add-live-session/add-live-session.component';
import { UpdateLiveSessionComponent } from './Admin/live-session/update-live-session/update-live-session.component';
import { EditDoseComponent } from './Admin/dose-calc/edit-dose/edit-dose.component';
import { UpdateProductCaseComponent } from './Admin/dose-calc/edit-dose/update-product-case/update-product-case.component';
import { UpdateProductIndicationComponent } from './Admin/dose-calc/edit-dose/update-product-indication/update-product-indication.component';
import { UpdateProductDoseComponent } from './Admin/dose-calc/edit-dose/update-product-dose/update-product-dose.component';
import { ViewCommentComponent } from './Admin/live-session/view-comment/view-comment.component';
import { NotificationComponent } from './Admin/notification/notification.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';

@NgModule( {
  declarations: [
    AppComponent,
    NotfoundComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    ProfileComponent,
    ProductsComponent,
    DoctorsComponent,
    LabsComponent,
    DiscountsComponent,
    AnnouncementsComponent,
    OrderCoordinatorComponent,
    AccountantComponent,
    SidebarAdminComponent,
    DoseCalcComponent,
    AddOrderCoordinatorComponent,
    AddAccountantComponent,
    AddDoctorComponent,
    EditDoctorComponent,
    AddLabComponent,
    EditLabComponent,
    AddproductComponent,
    EditproductComponent,
    TypeComponent,
    AddComponent,
    EditComponent,
    EditAnnounceComponent,
    AddAnnounceComponent,
    AddDiscountComponent,
    EditDiscountComponent,
    VerificationComponent,
    AddDetailsComponent,
    StoreProductComponent,
    ProductIndicationComponent,
    ProductDoseComponent,
    NewsComponent,
    UpdateNewsComponent,
    AddNewsComponent,
    LiveSessionComponent,
    AddLiveSessionComponent,
    UpdateLiveSessionComponent,
    EditDoseComponent,
    UpdateProductCaseComponent,
    UpdateProductIndicationComponent,
    UpdateProductDoseComponent,
    ViewCommentComponent,
    NotificationComponent,
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
      useClass:AuthInterceptor ,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
} )
export class AppModule { }
