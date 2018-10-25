import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IndexComponent } from './modules/index/index.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ClientTestimonialsComponent } from './modules/client-testimonials/client-testimonials.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { CategoryComponent } from './modules/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    ClientTestimonialsComponent,
    SuppliersComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }