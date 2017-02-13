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
var ImpressaoComponent = (function () {
    function ImpressaoComponent(pessoaService) {
        this.pessoaService = pessoaService;
        this.pessoas = [];
    }
    ImpressaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pessoaService.getPessoas()
            .then(function (pessoas) { return _this.pessoas = pessoas.sort(); });
    };
    ImpressaoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-impressao',
            templateUrl: './view/impressao.component.html',
            styleUrls: ['./css/impressao.component.css']
        }), 
        __metadata('design:paramtypes', [pessoa_service_1.PessoaService])
    ], ImpressaoComponent);
    return ImpressaoComponent;
}());
exports.ImpressaoComponent = ImpressaoComponent;
//# sourceMappingURL=impressao.component.js.map