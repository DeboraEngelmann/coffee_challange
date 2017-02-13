import { Component, OnInit } from '@angular/core';

import { Pessoa } from './pessoa';
import { PessoaService } from './pessoa.service';

@Component({
  moduleId: module.id,
  selector: 'my-impressao',
  templateUrl: './view/impressao.component.html',
  styleUrls: [ './css/impressao.component.css' ]
})
export class ImpressaoComponent implements OnInit {

  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.pessoaService.getPessoas()
      .then(pessoas => this.pessoas = pessoas.sort());
  }
}