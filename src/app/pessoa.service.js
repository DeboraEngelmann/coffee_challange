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
        this.pessoasUrl = 'api/pessoas'; // URL to web api
    }
    PessoaService.prototype.getPessoas = function () {
        return this.http.get(this.pessoasUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    PessoaService.prototype.getPessoa = function (id) {
        var url = this.pessoasUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    PessoaService.prototype.delete = function (id) {
        var url = this.pessoasUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    PessoaService.prototype.create = function (name) {
        return this.http
            .post(this.pessoasUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    PessoaService.prototype.update = function (pessoa) {
        var url = this.pessoasUrl + "/" + pessoa.id;
        return this.http
            .put(url, JSON.stringify(pessoa), { headers: this.headers })
            .toPromise()
            .then(function () { return pessoa; })
            .catch(this.handleError);
    };
    PessoaService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
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