import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componets/login/login.component';
import { UsuarioComponent } from './componets/usuario/usuario.component';

const routes: Routes = [
  { path: '', redirectTo: 'daily', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "usuario", component: UsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemasRoutingModule { }
