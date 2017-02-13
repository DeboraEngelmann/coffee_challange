import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';//Aceitar entradas de formulári
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { PessoaDetailComponent }  from './pessoa-detail.component';//nosso componente que delalha a pessoa
import { PessoasComponent }      from './pessoas.component';
import { PessoaService }          from './pessoa.service';
import { ImpressaoComponent }       from './impressao.component';
import { PessoaSearchComponent }  from './pessoa-search.component';


import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
   //Declaramos nossos componentes 
  declarations: [
    AppComponent,
    DashboardComponent,
    PessoaDetailComponent,
    PessoasComponent,
    ImpressaoComponent,
    PessoaSearchComponent
  ],
  providers: [ PessoaService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }