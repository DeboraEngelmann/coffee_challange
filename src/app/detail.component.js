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
require('rxjs/add/operator/switchMap'); //responsável por fazer o mapeamento do objeto passado por parâmetro
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var pessoa_service_1 = require('./pessoa.service');
var PessoaDetailComponent = (function () {
    function PessoaDetailComponent(pessoaService, route, location) {
        this.pessoaService = pessoaService;
        this.route = route;
        this.location = location;
    }
    PessoaDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.pessoaService.getPessoa(+params['id']); })
            .subscribe(function (pessoa) { return _this.pessoa = pessoa; });
    };
    //Atualiza os dados da pessoa e volta para a lista de pessoas cadastradas
    PessoaDetailComponent.prototype.save = function () {
        var _this = this;
        this.pessoaService.update(this.pessoa)
            .then(function () { return _this.goBack(); });
    };
    //Volta para a lista de pessoas cadastradas sem alterar
    PessoaDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    PessoaDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-pessoa-detail',
            templateUrl: './view/detail.component.html',
            styleUrls: ['./css/detail.component.css']
        }), 
        __metadata('design:paramtypes', [pessoa_service_1.PessoaService, router_1.ActivatedRoute, common_1.Location])
    ], PessoaDetailComponent);
    return PessoaDetailComponent;
}());
exports.PessoaDetailComponent = PessoaDetailComponent;
//# sourceMappingURL=detail.component.js.map