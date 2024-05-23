import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './webpage/componets/inicio/inicio.component';
import { NosotrosComponent } from './webpage/componets/nosotros/nosotros.component';
import { ServiciosComponent } from './webpage/componets/servicios/servicios.component';
import { ContactenosComponent } from './webpage/componets/contactenos/contactenos.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contactenos', component: ContactenosComponent },
  { path: 'sistemas', loadChildren: () => import('./sistemas/sistemas.module').then(m => m.SistemasModule)  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
