import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CartsComponent } from './components/carts/carts.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AllSliderComponent } from './Slider/all-slider/all-slider.component';
import { AllProductsComponent } from './Slider/all-products/all-products.component';
import { NewsComponent } from './Slider/news/news.component';
import { PromotionComponent } from './Slider/promotion/promotion.component';
import { AllProductsLinkComponent } from './Slider/links/all-products-link/all-products-link.component';
import { AllPoromotionsLinkComponent } from './Slider/links/all-poromotions-link/all-poromotions-link.component';
import { AllNewsLinkComponent } from './Slider/links/all-news-link/all-news-link.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { VerificationComponent } from './auth/verification/verification.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SingleCategoryComponent } from './catalog/single-category/single-category.component';
import { AccountComponent } from './user/account/account.component';
import { OrdersComponent } from './user/dashboard/orders/orders.component';
import { PendingComponent } from './user/dashboard/pending/pending.component';
import { ShippedComponent } from './user/dashboard/shipped/shipped.component';
import { ProfileComponent } from './user/profile/profile.component';
import { WishlistComponent } from './user/wishlist/wishlist.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { DoctorDetailsComponent } from './pharmacy-services/doctor-details/doctor-details.component';
import { LabsDetailsComponent } from './pharmacy-services/labs-details/labs-details.component';
import { DoctorSpecializeSearchPipe } from './pipes/doctor-specialize-search.pipe';
import { DoctorNameSearchPipe } from './pipes/doctor-name-search.pipe';
import { LabNameSearchPipe } from './pipes/lab-name-search.pipe';
import { DoseCalculatorComponent } from './pharmacy-services/dose-calculator/dose-calculator.component';
import { CheckoutComponent } from './user/checkout/checkout.component';
import { DashboardComponent } from './user/dashboard/dashboard/dashboard.component';
import { DoctorsComponent } from './pharmacy-services/doctors/doctors.component';
import { LabsComponent } from './pharmacy-services/labs/labs.component';
import { LiveSessionComponent } from './pharmacy-services/live-session/live-session.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { NotfoundDataComponent } from './components/notfound-data/notfound-data.component';
import { ProductNamePipe } from './pipes/product-name.pipe';
import { ProductDosePipe } from './pipes/product-dose.pipe';
import { DoseResultsComponent } from './pharmacy-services/dose-results/dose-results.component';
import { ContactComponent } from './components/contact/contact.component';
import { CategoryComponent } from './home/category/category.component';
import { HomeComponent } from './home/home.component';
import { NotfoundProductsComponent } from './components/notfound-products/notfound-products.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PharmacyNewsComponent } from './pharmacy-services/pharmacy-news/pharmacy-news.component';
import { SessionComponent } from './pharmacy-services/session/session.component';


@NgModule( {
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    CategoryComponent,
    FooterComponent,
    CartsComponent,
    NotfoundComponent,
    AllSliderComponent,
    AllProductsComponent,
    NewsComponent,
    PromotionComponent,
    AllProductsLinkComponent,
    AllPoromotionsLinkComponent,
    AllNewsLinkComponent,
    ProductDetailsComponent,
    VerificationComponent,
    ForgetPasswordComponent,
    CatalogComponent,
    SingleCategoryComponent,
    AccountComponent,
    OrdersComponent,
    PendingComponent,
    ShippedComponent,
    ProfileComponent,
    WishlistComponent,
    ResetPasswordComponent,
    ContactComponent,
    DoctorDetailsComponent,
    LabsDetailsComponent,
    DoctorSpecializeSearchPipe,
    DoctorNameSearchPipe,
    LabNameSearchPipe,
    DoseCalculatorComponent,
    CheckoutComponent,
    DashboardComponent,
    DoctorsComponent,
    LabsComponent,
    LiveSessionComponent,
    NotfoundDataComponent,
    ProductNamePipe,
    ProductDosePipe,
    DoseResultsComponent,
    HomeComponent,
    NotfoundProductsComponent,
    SpinnerComponent,
    PharmacyNewsComponent,
    SessionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
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
