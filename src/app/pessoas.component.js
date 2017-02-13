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
var router_1 = require('@angular/router');
//importação do modulo de serviço
var pessoa_service_1 = require('./pessoa.service');
var PessoasComponent = (function () {
    //Construtor  usa Injeção de Dependência para criar os objetos em memória
    function PessoasComponent(router, pessoaService) {
        this.router = router;
        this.pessoaService = pessoaService;
    }
    PessoasComponent.prototype.getPessoas = function () {
        var _this = this;
        this.pessoaService
            .getPessoas()
            .then(function (pessoas) { return _this.pessoas = pessoas; });
    };
    PessoasComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.pessoaService.create(name)
            .then(function (pessoa) {
            _this.pessoas.push(pessoa);
            _this.selectedPessoa = null;
        });
    };
    PessoasComponent.prototype.delete = function (pessoa) {
        var _this = this;
        this.pessoaService
            .delete(pessoa.id)
            .then(function () {
            _this.pessoas = _this.pessoas.filter(function (h) { return h !== pessoa; });
            if (_this.selectedPessoa === pessoa) {
                _this.selectedPessoa = null;
            }
        });
    };
    PessoasComponent.prototype.ngOnInit = function () {
        this.getPessoas();
    };
    PessoasComponent.prototype.onSelect = function (pessoa) {
        this.selectedPessoa = pessoa;
    };
    PessoasComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedPessoa.id]);
    };
    PessoasComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-pessoas',
            templateUrl: './view/pessoas.component.html',
            styleUrls: ['./css/pessoas.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, pessoa_service_1.PessoaService])
    ], PessoasComponent);
    return PessoasComponent;
}());
exports.PessoasComponent = PessoasComponent;
//# sourceMappingURL=pessoas.component.js.map