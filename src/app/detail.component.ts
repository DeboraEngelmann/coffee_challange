import 'rxjs/add/operator/switchMap'; //responsável por fazer o mapeamento do objeto passado por parâmetro
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Pessoa } from './pessoa';
import { PessoaService } from './pessoa.service';

@Component({
  moduleId: module.id,
  selector: 'my-pessoa-detail',
  templateUrl: './view/detail.component.html',
  styleUrls: [ './css/detail.component.css' ]
})
export class PessoaDetailComponent implements OnInit {
  //Declaração de variaveis
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
  //Atualiza os dados da pessoa e volta para a lista de pessoas cadastradas
  save(): void {    
      this.pessoaService.update(this.pessoa)
      .then(() => this.goBack());     
  }
  //Volta para a lista de pessoas cadastradas sem alterar
  goBack(): void {
    this.location.back();
  }
}