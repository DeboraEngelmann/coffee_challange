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
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
// Observable class extensions
require('rxjs/add/observable/of');
// Observable operators
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
var pessoa_search_service_1 = require('./pessoa-search.service');
var PessoaSearchComponent = (function () {
    function PessoaSearchComponent(pessoaSearchService, router) {
        this.pessoaSearchService = pessoaSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    // Push a search term into the observable stream.
    PessoaSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    PessoaSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pessoas = this.searchTerms
            .debounceTime(300) // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time the term changes
            ? _this.pessoaSearchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: add real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    PessoaSearchComponent.prototype.gotoDetail = function (pessoa) {
        var link = ['/detail', pessoa.id];
        this.router.navigate(link);
    };
    PessoaSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pessoa-search',
            templateUrl: './view/pessoa-search.component.html',
            styleUrls: ['./css/pessoa-search.component.css'],
            providers: [pessoa_search_service_1.PessoaSearchService]
        }), 
        __metadata('design:paramtypes', [pessoa_search_service_1.PessoaSearchService, router_1.Router])
    ], PessoaSearchComponent);
    return PessoaSearchComponent;
}());
exports.PessoaSearchComponent = PessoaSearchComponent;
//# sourceMappingURL=pessoas-search.component.js.map