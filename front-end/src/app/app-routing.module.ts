import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CartsComponent } from './components/carts/carts.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AllPoromotionsLinkComponent } from './Slider/links/all-poromotions-link/all-poromotions-link.component';
import { AllProductsLinkComponent } from './Slider/links/all-products-link/all-products-link.component';
import { AllNewsLinkComponent } from './Slider/links/all-news-link/all-news-link.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { VerificationComponent } from './auth/verification/verification.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProfileComponent } from './user/profile/profile.component';
import { WishlistComponent } from './user/wishlist/wishlist.component';
import { OrdersComponent } from './user/dashboard/orders/orders.component';
import { ShippedComponent } from './user/dashboard/shipped/shipped.component';
import { PendingComponent } from './user/dashboard/pending/pending.component';
import { AccountComponent } from './user/account/account.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { DoctorDetailsComponent } from './pharmacy-services/doctor-details/doctor-details.component';
import { LabsDetailsComponent } from './pharmacy-services/labs-details/labs-details.component';
import { DashboardComponent } from './user/dashboard/dashboard/dashboard.component';
import { CheckoutComponent } from './user/checkout/checkout.component';
import { DoctorsComponent } from './pharmacy-services/doctors/doctors.component';
import { LabsComponent } from './pharmacy-services/labs/labs.component';
import { DoseCalculatorComponent } from './pharmacy-services/dose-calculator/dose-calculator.component';
import { ContactComponent } from './components/contact/contact.component';
import { DoseResultsComponent } from './pharmacy-services/dose-results/dose-results.component';
import { HomeComponent } from './home/home.component';
import { PharmacyNewsComponent } from './pharmacy-services/pharmacy-news/pharmacy-news.component';
import { SessionComponent } from './pharmacy-services/session/session.component';
import { LiveSessionComponent } from './pharmacy-services/live-session/live-session.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'signup',  component: SignupComponent },
  { path: 'carts', component: CartsComponent },
  { path: 'home', canActivate: [AuthGuard] ,component: HomeComponent },
  { path: 'forgetPassword',component: ForgetPasswordComponent },
  { path: 'verification' , component: VerificationComponent },
  { path: 'resetPassword' , component: ResetPasswordComponent },
  { path: 'promotions',  canActivate: [AuthGuard] ,component: AllPoromotionsLinkComponent },
  { path: 'products',  canActivate: [AuthGuard] ,component: AllProductsLinkComponent },
  { path: 'new',  canActivate: [AuthGuard] ,component: AllNewsLinkComponent },
  { path: 'details/:id',  canActivate: [AuthGuard] ,component: ProductDetailsComponent },
  { path: 'catalog',  canActivate: [AuthGuard] ,component: CatalogComponent },
  { path: 'user',  canActivate: [AuthGuard] ,component: AccountComponent },
  { path: 'user/dashboard', canActivate: [AuthGuard] , component: DashboardComponent },
  { path: 'user/editProfile', canActivate: [AuthGuard] , component: ProfileComponent },
  { path: 'user/wishlist', canActivate: [AuthGuard] , component: WishlistComponent },
  { path: 'user/dashboard/orders', canActivate: [AuthGuard] , component: OrdersComponent },
  { path: 'user/dashboard/shippedOrders', canActivate: [AuthGuard] , component: ShippedComponent },
  { path: 'user/dashboard/pendingOrders', canActivate: [AuthGuard] , component: PendingComponent },
  { path: 'cart/checkout', canActivate: [AuthGuard] , component: CheckoutComponent },
  { path: 'services/doctors', canActivate: [AuthGuard] , component: DoctorsComponent },
  { path: 'services/labs', canActivate: [AuthGuard] , component: LabsComponent },
  { path: 'services/doseClaculator', canActivate: [AuthGuard] , component: DoseCalculatorComponent },
  { path: 'services/session', canActivate: [AuthGuard] , component: SessionComponent },
  { path: 'services/liveSession/:id', canActivate: [AuthGuard] , component: LiveSessionComponent },
  { path: 'services/news', canActivate: [AuthGuard] , component: PharmacyNewsComponent },
  { path: 'doctorDetails/:id', canActivate: [AuthGuard] , component: DoctorDetailsComponent },
  { path: 'labDetails/:id', canActivate: [AuthGuard] , component: LabsDetailsComponent },
  { path: 'contactUs', canActivate: [AuthGuard] , component: ContactComponent },
  { path: 'doseResults/:age/:weight/:id', canActivate: [AuthGuard] , component: DoseResultsComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule],
} )
export class AppRoutingModule { }
