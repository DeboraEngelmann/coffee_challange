// Responsável por criar as rotas
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { PessoasComponent } from './pessoas.component';
import {PessoaDetailComponent} from './detail.component';

// Rotas e endereços
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'pessoas',     component: PessoasComponent },
  { path: 'detail/:id', component: PessoaDetailComponent } 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}