import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './Admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './Admin/admin-orders/admin-orders.component';
import { LogInComponent } from './log-in/log-in.component';

import { AuthGuardService } from './auth-guard.service'

// , canActivate: [AuthGuardService]


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'orders', component: MyOrdersComponent},
  { path: 'product', component: ProductsComponent },
  { path: 'cart', component: ShoppingCartComponent},
  { path: 'checkout', component: CheckoutComponent },
  { path: 'success', component: OrderSuccessComponent },
  { path: 'login', component: LogInComponent },
  { path: 'admin/product', component: AdminProductsComponent },
  { path: 'admin/order', component: AdminOrdersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
