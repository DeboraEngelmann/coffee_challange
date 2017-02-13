import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { PessoasComponent }      from './pessoas.component';
import { PessoaDetailComponent }  from './pessoa-detail.component';
import { ImpressaoComponent }       from './impressao.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: PessoaDetailComponent },
  { path: 'pessoas',     component: PessoasComponent },
  { path: 'impressao',     component: ImpressaoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}