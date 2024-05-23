import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SistemasRoutingModule } from './sistemas-routing.module';
import { LoginComponent } from './componets/login/login.component';
import { UsuarioComponent } from './componets/usuario/usuario.component';
import { AppPrimeNgModule } from '../app-prime-ng.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    SistemasRoutingModule,
    AppPrimeNgModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
  ]
})
export class SistemasModule { }
