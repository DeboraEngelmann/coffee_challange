import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Pessoa }         from './pessoa';
import { PessoaService }  from './pessoa.service';
@Component({
  moduleId: module.id,
  selector: 'my-pessoa-detail',
  templateUrl: './view/pessoa-detail.component.html',
  styleUrls: [ './css/pessoa-detail.component.css' ]
})
export class PessoaDetailComponent implements OnInit {
 //atributo
  pessoa: Pessoa;

  constructor(
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.pessoaService.getPessoa(+params['id']))
      .subscribe(pessoa => this.pessoa = pessoa);
  }

 save(): void {
    this.pessoaService.update(this.pessoa)
      .then(() => this.goBack());
  }
  
  goBack(): void {
    this.location.back();
  }
}