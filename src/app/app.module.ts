import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FieldComponent } from './field/field.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';
import { SalesComponent } from './sales/sales.component';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { PaymentComponent } from './payment/payment.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'field-component', component: FieldComponent },
  { path: 'register-component', component: RegisterComponent },
  { path: 'homepage-component', component: HomepageComponent },
  { path: 'products-component', component: ProductsComponent },
  { path: 'aboutus-component', component: AboutusComponent },
  { path: 'users-component', component: UsersComponent },
  { path: 'orders-component', component: OrdersComponent },
  { path: 'sales-component', component: SalesComponent },
  { path: 'prodadmin-component', component: ProductsAdminComponent },
  { path: 'dashboard-component', component: DashboardComponent },
  { path: 'productinfo-component', component: ProductInfoComponent },
  { path: 'payment-component', component: PaymentComponent },
  { path: 'userprofile-component', component: UserProfileComponent }
]; // sets up routes constant where you define your routes


@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    RegisterComponent,
    HomepageComponent,
    AboutusComponent,
    ProductsComponent,
    UsersComponent,
    OrdersComponent,
    SalesComponent,
    ProductsAdminComponent,
    DashboardComponent,
    ProductInfoComponent,
    PaymentComponent,
    UserProfileComponent
  ]
  ,
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)],
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
