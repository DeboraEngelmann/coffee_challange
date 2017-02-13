import { Component, OnInit } from '@angular/core';

import { Pessoa } from './pessoa';
import { PessoaService } from './pessoa.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: './view/dashboard.component.html',
  styleUrls: [ './css/dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.pessoaService.getPessoas()
      .then(pessoas => this.pessoas = pessoas.slice(1, 5));
  }
}
