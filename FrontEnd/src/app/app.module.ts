import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { environment } from './../environments/environment';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { LogInComponent } from './log-in/log-in.component';
import { NavBarSimpleComponent } from './nav-bar-simple/nav-bar-simple.component';
import { FooterLargeComponent } from './footer-large/footer-large.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupSuccessComponent } from './signup-success/signup-success.component';
import { SellerLogInComponent } from './seller/seller-log-in/seller-log-in.component';
import { SellerHomeComponent } from './seller/seller-home/seller-home.component';
import { SellerRegisterComponent } from './seller/seller-register/seller-register.component';
import { SellerNavBarComponent } from './seller/seller-nav-bar/seller-nav-bar.component';
import { SellerProductsComponent } from './seller/seller-products/seller-products.component';
import { SellerProductsAddComponent } from './seller/seller-products-add/seller-products-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    LogInComponent,
    NavBarSimpleComponent,
    FooterLargeComponent,
    RegisterComponent,
    LogoutComponent,
    SignupSuccessComponent,
    SellerLogInComponent,
    SellerHomeComponent,
    SellerRegisterComponent,
    SellerNavBarComponent,
    SellerProductsComponent,
    SellerProductsAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
