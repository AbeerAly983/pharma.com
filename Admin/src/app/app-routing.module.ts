import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ProfileComponent } from './Admin/profile/profile.component';
import { ProductsComponent } from './Admin/products/products.component';
import { OrderCoordinatorComponent } from './Admin/order-coordinator/order-coordinator.component';
import { AccountantComponent } from './Admin/accountant/accountant.component';
import { AnnouncementsComponent } from './Admin/announcements/announcements.component';
import { LabsComponent } from './Admin/labs/labs.component';
import { DoctorsComponent } from './Admin/doctors/doctors.component';
import { DiscountsComponent } from './Admin/discounts/discounts.component';
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
import { EditComponent } from './Admin/type/edit/edit.component';
import { AddComponent } from './Admin/type/add/add.component';
import { AddAnnounceComponent } from './Admin/announcements/add-announce/add-announce.component';
import { EditAnnounceComponent } from './Admin/announcements/edit-announce/edit-announce.component';
import { AddDiscountComponent } from './Admin/discounts/add-discount/add-discount.component';
import { EditDiscountComponent } from './Admin/discounts/edit-discount/edit-discount.component';
import { VerificationComponent } from './auth/verification/verification.component';
import { AddDetailsComponent } from './Admin/dose-calc/add-details/add-details.component';
import { ProductIndicationComponent } from './Admin/dose-calc/add-details/product-indication/product-indication.component';
import { StoreProductComponent } from './Admin/dose-calc/add-details/store-product/store-product.component';
import { ProductDoseComponent } from './Admin/dose-calc/add-details/product-dose/product-dose.component';
import { NewsComponent } from './Admin/news/news.component';
import { AddNewsComponent } from './Admin/news/add-news/add-news.component';
import { UpdateNewsComponent } from './Admin/news/update-news/update-news.component';
import { LiveSessionComponent } from './Admin/live-session/live-session.component';
import { AddLiveSessionComponent } from './Admin/live-session/add-live-session/add-live-session.component';
import { UpdateLiveSessionComponent } from './Admin/live-session/update-live-session/update-live-session.component';
import { EditDoseComponent } from './Admin/dose-calc/edit-dose/edit-dose.component';
import { UpdateProductCaseComponent } from './Admin/dose-calc/edit-dose/update-product-case/update-product-case.component';
import { UpdateProductIndicationComponent } from './Admin/dose-calc/edit-dose/update-product-indication/update-product-indication.component';
import { UpdateProductDoseComponent } from './Admin/dose-calc/edit-dose/update-product-dose/update-product-dose.component';
import { ViewCommentComponent } from './Admin/live-session/view-comment/view-comment.component';
import { NotificationComponent } from './Admin/notification/notification.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'verification', component: VerificationComponent },
  { path: 'resetPassword', component: ResetPasswordComponent },
  { path: 'admin/profile', component: ProfileComponent },
  { path: 'admin/products', component: ProductsComponent },
  { path: 'admin/product/add', component: AddproductComponent },
  { path: 'admin/product/edit/:id', component: EditproductComponent },
  { path: 'admin/orderCoordinator', component: OrderCoordinatorComponent },
  { path: 'admin/orderCoordinator/add', component: AddOrderCoordinatorComponent },
  { path: 'admin/accountant', component: AccountantComponent },
  { path: 'admin/accountant/add', component: AddAccountantComponent },
  { path: 'admin/announcement', component: AnnouncementsComponent },
  { path: 'admin/announcement/add', component: AddAnnounceComponent },
  { path: 'admin/announcement/edit/:id', component: EditAnnounceComponent },
  { path: 'admin/doctors', component: DoctorsComponent },
  { path: 'admin/doctors/add', component: AddDoctorComponent },
  { path: 'admin/doctors/edit/:id', component: EditDoctorComponent },
  { path: 'admin/labs', component: LabsComponent },
  { path: 'admin/labs/add', component: AddLabComponent },
  { path: 'admin/labs/edit/:id', component: EditLabComponent },
  { path: 'admin/doseCalculator', component: DoseCalcComponent },
  { path: 'admin/offers', component: DiscountsComponent },
  { path: 'admin/offers/add', component: AddDiscountComponent },
  { path: 'admin/offers/edit/:id', component: EditDiscountComponent },
  { path: 'admin/type', component: TypeComponent },
  { path: 'admin/type/edit/:id', component: EditComponent },
  { path: 'admin/type/add', component: AddComponent },
  { path: 'admin/doseCalculator/add', component: AddDetailsComponent },
  { path: 'admin/doseCalculator/add/product', component: StoreProductComponent },
  { path: 'admin/doseCalculator/add/indication', component: ProductIndicationComponent },
  { path: 'admin/doseCalculator/add/product-dose', component: ProductDoseComponent },
  { path: 'admin/doseCalculator/edit/:id', component: EditDoseComponent},
  { path: 'admin/doseCalculator/edit/ProductCase/:id', component:UpdateProductCaseComponent},
  { path: 'admin/doseCalculator/edit/ProductIndication/:id', component:UpdateProductIndicationComponent},
  { path: 'admin/doseCalculator/edit/ProductDose/:id', component:UpdateProductDoseComponent},
  { path: 'admin/news', component: NewsComponent },
  { path: 'admin/news/add', component:AddNewsComponent },
  { path: 'admin/news/edit/:id', component: UpdateNewsComponent },
  { path: 'admin/session', component: LiveSessionComponent },
  { path: 'admin/session/add', component:AddLiveSessionComponent },
  { path: 'admin/session/edit/:id', component: UpdateLiveSessionComponent },
  { path: 'admin/session/comment/:id', component: ViewCommentComponent },
  { path: 'admin/notification', component: NotificationComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule],
} )
export class AppRoutingModule { }
