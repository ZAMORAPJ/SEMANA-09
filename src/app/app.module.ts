import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './webpage/componets/inicio/inicio.component';
import { NosotrosComponent } from './webpage/componets/nosotros/nosotros.component';
import { ServiciosComponent } from './webpage/componets/servicios/servicios.component';
import { ContactenosComponent } from './webpage/componets/contactenos/contactenos.component';
import { HeaderComponent } from './webpage/componets/header/header.component';
import { AppPrimeNgModule } from './app-prime-ng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    ServiciosComponent,
    ContactenosComponent,
    HeaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AppPrimeNgModule
  ],
  exports: [ AppPrimeNgModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
