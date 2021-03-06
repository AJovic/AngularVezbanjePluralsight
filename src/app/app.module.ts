import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from  '@angular/common/http'
import {RouterModule} from "@angular/router"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ProductListComponent} from './products/product-list.component'
import {StarComponent} from "./shared/star.component";
import { ProductDetailComponent } from './products/product-detail.component'
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailGuard } from './products/product-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    RouterModule.forRoot([
      {path:'products', component:ProductListComponent},
      {
        path:'products/:id', 
        canActivate:[ProductDetailGuard],
        component:ProductDetailComponent},
      {path:'welcome', component:WelcomeComponent},
      {path:'', redirectTo:'welcome', pathMatch:'full'}, 
      {path:'**', redirectTo:'welcome', pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
