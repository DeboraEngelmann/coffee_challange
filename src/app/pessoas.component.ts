import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//importa nosso objeto
import { Pessoa } from './pessoa';
//importação do modulo de serviço
import { PessoaService } from './pessoa.service';

@Component({
  moduleId: module.id,
  selector: 'my-pessoas',
  templateUrl: './view/pessoas.component.html',
  styleUrls: [ './css/pessoas.component.css' ]
})

//códogo Fonte que manipula os dados
export class PessoasComponent implements OnInit {
  pessoas: Pessoa[];
  selectedPessoa: Pessoa;//variavel que guarda a pessoa selecionado

//Construtor  usa Injeção de Dependência para criar os objetos em memória
  constructor(
    private router: Router,
    private pessoaService: PessoaService) { }

 getPessoas(): void {
    this.pessoaService
        .getPessoas()
        .then(pessoas => this.pessoas = pessoas);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.pessoaService.create(name)
      .then(pessoa => {
        this.pessoas.push(pessoa);
        this.selectedPessoa = null;
      });
  }

  delete(pessoa: Pessoa): void {
    this.pessoaService
        .delete(pessoa.id)
        .then(() => {
          this.pessoas = this.pessoas.filter(h => h !== pessoa);
          if (this.selectedPessoa === pessoa) { this.selectedPessoa = null; }
        });
  }

  ngOnInit(): void {
    this.getPessoas();
  }

  onSelect(pessoa: Pessoa): void {
    this.selectedPessoa = pessoa;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedPessoa.id]);
  }
}
