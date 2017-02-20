// Modulo do aplicativo
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';//Aceitar entradas de formulários
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; //Cria uma Api virtual
import { InMemoryDataService } from './in-memory-data.service'; //Cria um serviço de Api
// Models do aplicativo
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { PessoasComponent } from './pessoas.component';
import { PessoaService } from './pessoa.service'; //importa modulo de serviço
import { ControlMessagesComponent } from './control-messages.component';
import { ValidationService } from './validation.service';//Importa o serviço de validação
import { AppRoutingModule } from './app-routing.module';
import { PessoaDetailComponent }  from './detail.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PessoasComponent,
    ControlMessagesComponent,
    PessoaDetailComponent
  ],
  providers: [ PessoaService,ValidationService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }