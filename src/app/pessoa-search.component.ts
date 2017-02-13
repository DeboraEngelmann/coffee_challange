import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { PessoaSearchService } from './pessoa-search.service';
import { Pessoa } from './pessoa';

@Component({
  moduleId: module.id,
  selector: 'pessoa-search',
  templateUrl: './view/pessoa-search.component.html',
  styleUrls: [ './css/pessoa-search.component.css' ],
  providers: [PessoaSearchService]
})
export class PessoaSearchComponent implements OnInit {
  pessoas: Observable<Pessoa[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private pessoaSearchService: PessoaSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.pessoas = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.pessoaSearchService.search(term)
        // or the observable of empty pessoas if there was no search term
        : Observable.of<Pessoa[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Pessoa[]>([]);
      });
  }

  gotoDetail(pessoa: Pessoa): void {
    let link = ['/detail', pessoa.id];
    this.router.navigate(link);
  }
}
