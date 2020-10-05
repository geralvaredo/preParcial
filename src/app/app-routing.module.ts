import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './componentes/login/login.component';
import {RegistroComponent} from './componentes/registro/registro.component';
import {ErrorComponent} from './componentes/error/error.component';
import {PrincipalComponent} from './componentes/principal/principal.component';

const routes: Routes = [
  {path: '' , component : PrincipalComponent },
  {path: 'error', component : ErrorComponent},
  {path: 'registro' , component: RegistroComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
