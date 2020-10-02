import { SignupSuccessComponent } from './signup-success/signup-success.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { LogInComponent } from './log-in/log-in.component';
// import {  }

import { AuthGuardService } from './auth-guard.service'
import { AuthGuardLoggedinService } from './auth-guard-loggedin.service';

// When user is not loggedin
// Use this to protect a route --> , canActivate: [AuthGuardService]

// When user is loggedin
// Use this to protect a route --> , canActivate: [AuthGuardLoggedinService]


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'orders', component: MyOrdersComponent},
  { path: 'product', component: ProductsComponent },
  { path: 'cart', component: ShoppingCartComponent, canActivate: [AuthGuardService]},
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuardService] },
  { path: 'logout', component: LogoutComponent },
  { path: 'signup-success', component: SignupSuccessComponent },
  { path: 'success', component: OrderSuccessComponent },
  { path: 'login', component: LogInComponent, canActivate: [AuthGuardLoggedinService] },
  { path: 'register', component: RegisterComponent },
  // { path: 'seller', component:  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
