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
var core_1 = require('@angular/core');
var pessoa_service_1 = require('./pessoa.service');
var DashboardComponent = (function () {
    function DashboardComponent(pessoaService) {
        this.pessoaService = pessoaService;
        //Declaração de variaveis
        this.pessoas = [];
        this.turnos = [];
        this.a = 0;
    }
    //Pega a lista de pessoas e sorteia uma ordem
    DashboardComponent.prototype.getPessoas = function () {
        var _this = this;
        this.pessoaService
            .getPessoas()
            .then(function (pessoas) { return _this.pessoas = pessoas.sort(); });
    };
    //Pega a lista de turnos
    DashboardComponent.prototype.getTurnos = function () {
        var _this = this;
        this.pessoaService
            .getTurnos()
            .then(function (turnos) { return _this.turnos = turnos; });
    };
    //Inicia o componente
    DashboardComponent.prototype.ngOnInit = function () {
        this.getPessoas();
        this.getTurnos();
    };
    //  Gera a lista de acordo com os parâmetros estipulados
    DashboardComponent.prototype.geraLista = function () {
        for (var j = 0, length = this.turnos.length; j < length; j++) {
            this.turnos[j].pessoa = this.pessoas[this.a].name;
            if ((this.pessoas.length - 1) == this.a) {
                this.a = 0;
            }
            else {
                this.a++;
            }
            this.pessoaService.updateTurnos(this.turnos[j]);
        }
    };
    // Imprime a lista
    DashboardComponent.prototype.printToCart = function (printSectionId) {
        var popupWinindow;
        var innerContents = document.getElementById(printSectionId).innerHTML;
        popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="./app/css/dashboard.component.css" /></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-dashboard',
            templateUrl: './view/dashboard.component.html',
            styleUrls: ['./css/dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [pessoa_service_1.PessoaService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map