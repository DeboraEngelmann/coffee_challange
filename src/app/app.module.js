"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Modulo do aplicativo
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms'); //Aceitar entradas de formulários
var http_1 = require('@angular/http');
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api'); //Cria uma Api virtual
var in_memory_data_service_1 = require('./in-memory-data.service'); //Cria um serviço de Api
// Models do aplicativo
var app_component_1 = require('./app.component');
var dashboard_component_1 = require('./dashboard.component');
var pessoas_component_1 = require('./pessoas.component');
var pessoa_service_1 = require('./pessoa.service'); //importa modulo de serviço
var control_messages_component_1 = require('./control-messages.component');
var validation_service_1 = require('./validation.service'); //Importa o serviço de validação
var app_routing_module_1 = require('./app-routing.module');
var detail_component_1 = require('./detail.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
                app_routing_module_1.AppRoutingModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                pessoas_component_1.PessoasComponent,
                control_messages_component_1.ControlMessagesComponent,
                detail_component_1.PessoaDetailComponent
            ],
            providers: [pessoa_service_1.PessoaService, validation_service_1.ValidationService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map