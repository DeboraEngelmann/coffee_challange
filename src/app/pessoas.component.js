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
var forms_1 = require('@angular/forms');
//importação do modulo de serviço
var pessoa_service_1 = require('./pessoa.service');
var PessoasComponent = (function () {
    //Construtor  usa Injeção de Dependência para criar os objetos em memória
    function PessoasComponent(router, pessoaService, formBuilder) {
        this.router = router;
        this.pessoaService = pessoaService;
        this.formBuilder = formBuilder;
        this.cadastroValido = true;
    }
    //Inicializa componente 
    PessoasComponent.prototype.ngOnInit = function () {
        this.getPessoas(); //Pega as pessoas
        //Inicializa o formulario e as validações
        this.cadForm = this.formBuilder.group({
            'name': ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
        });
    };
    PessoasComponent.prototype.getPessoas = function () {
        var _this = this;
        this.pessoaService
            .getPessoas()
            .then(function (pessoas) { return _this.pessoas = pessoas; });
    };
    //Função responsável por adicionar uma nova pessoa ao cadastro de pessoas
    PessoasComponent.prototype.add = function () {
        var _this = this;
        var name;
        if (this.cadForm.dirty && this.cadForm.valid) {
            this.validaCadastro(this.cadForm.value.name); //Verifica se existe duplicidade
            if (this.cadastroValido == false) {
                alert("O nome " + this.cadForm.value.name + " j\u00E1 foi cadastrado.");
            }
            else {
                name = this.cadForm.value.name.trim();
                this.pessoaService.create(name)
                    .then(function (pessoa) {
                    _this.pessoas.push(pessoa);
                });
            }
            this.cadastroValido = true;
        }
    };
    //Verifica se existe duplicidade
    PessoasComponent.prototype.validaCadastro = function (name) {
        for (var i = 0, length = this.pessoas.length; i < length; i++) {
            console.log(name);
            console.log(this.pessoas[i].name);
            if (name == this.pessoas[i].name) {
                this.cadastroValido = false;
            }
        }
    };
    //Edição
    PessoasComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedPessoa.id]);
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
    //Seleciona a pessoa para edição
    PessoasComponent.prototype.onSelect = function (pessoa) {
        this.selectedPessoa = pessoa;
        this.gotoDetail();
    };
    PessoasComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-pessoas',
            templateUrl: './view/pessoas.component.html',
            styleUrls: ['./css/pessoas.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, pessoa_service_1.PessoaService, forms_1.FormBuilder])
    ], PessoasComponent);
    return PessoasComponent;
}());
exports.PessoasComponent = PessoasComponent;
//# sourceMappingURL=pessoas.component.js.map