import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { AdminPredoctComponent } from './admin/admin-predoct/admin-predoct.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { OrdersComponent } from './orders/orders.component';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductlistComponent } from './products/productlist/productlist.component';
import { ProductchildComponent } from './products/productchild/productchild.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
// import { AddproductComponent } from './addproduct/addproduct.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './admin/admin-predoct/child/child.component';
// import { ChildComponent } from './addproduct/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    OrdersComponent,
    MyProfileComponent,
    LoginComponent,
    ProductsComponent,
    ProductlistComponent,
    MyCartComponent,
    ProductchildComponent,
    ProductDetailComponent,
    AdminPredoctComponent,
    ChildComponent,
    // ChildComponent
    // AddproductComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'products', component:ProductsComponent},
      {path:'cart', component:MyCartComponent},
      {path:'order', component:OrdersComponent},
      {path:'admin/order', component:AdminOrderComponent},
      {path:'admin/product', component:AdminPredoctComponent},
      {path:'profile', component:MyProfileComponent},
      {path:'login', component:LoginComponent},
      {path:'productdetail', component:ProductDetailComponent},
      {path:'addproduct', component:AdminPredoctComponent},      

    ]),
    NgbModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
