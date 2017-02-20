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
//serviço reponsavel por manipular os dados
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var PessoaService = (function () {
    function PessoaService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.pessoasUrl = 'api/pessoas'; // URL da web api
        this.turnosUrl = 'api/turnos'; // URL da web api
    }
    // Retorna a tabela de pessoas
    PessoaService.prototype.getPessoas = function () {
        return this.http.get(this.pessoasUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    //Retorna a lista de turnos
    PessoaService.prototype.getTurnos = function () {
        return this.http.get(this.turnosUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    //Retorna o item referente ao id selecionado
    PessoaService.prototype.getPessoa = function (id) {
        var url = this.pessoasUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    //Deleta o item referente ao id selecionado
    PessoaService.prototype.delete = function (id) {
        var url = this.pessoasUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    //Cria um novo item na lista
    PessoaService.prototype.create = function (name) {
        return this.http
            .post(this.pessoasUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    //Atualiza o item da lista pessoas
    PessoaService.prototype.update = function (pessoa) {
        var url = this.pessoasUrl + "/" + pessoa.id;
        return this.http
            .put(url, JSON.stringify(pessoa), { headers: this.headers })
            .toPromise()
            .then(function () { return pessoa; })
            .catch(this.handleError);
    };
    //Atualiza o item da lista turnos
    PessoaService.prototype.updateTurnos = function (turnos) {
        var url = this.turnosUrl + "/" + turnos.id;
        return this.http
            .put(url, JSON.stringify(turnos), { headers: this.headers })
            .toPromise()
            .then(function () { return turnos; })
            .catch(this.handleError);
    };
    //Retorna se houver algum erro
    PessoaService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    PessoaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PessoaService);
    return PessoaService;
}());
exports.PessoaService = PessoaService;
//# sourceMappingURL=pessoa.service.js.map