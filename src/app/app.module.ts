import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './OnlineShopping/products/products.component';
import { CartItemComponent } from './OnlineShopping/cart-item/cart-item.component';
import { HttpClientModule }  from '@angular/common/http';
import { CartItem2Component } from './PracticeOnline/cart-item2/cart-item2.component';
import { Products2Component } from './PracticeOnline/products2/products2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartItemComponent,
    CartItem2Component,
    Products2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
