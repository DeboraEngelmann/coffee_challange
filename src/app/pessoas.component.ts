import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidationService } from './validation.service';
//importa o objeto
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
  cadForm: any; 
  cadastroValido:boolean = true;
  
//Construtor  usa Injeção de Dependência para criar os objetos em memória
  constructor(
    private router: Router,
    private pessoaService: PessoaService,
    private formBuilder: FormBuilder)
     { }
 //Inicializa componente 
 ngOnInit(): void {
  this.getPessoas();//Pega as pessoas
  //Inicializa o formulario e as validações
   this.cadForm = this.formBuilder.group({
      'name': ['',  [Validators.required, Validators.minLength(3)]],
    });     
  }
 
 getPessoas(): void {
    this.pessoaService
        .getPessoas()
        .then(pessoas => this.pessoas = pessoas);
  }
 //Função responsável por adicionar uma nova pessoa ao cadastro de pessoas
  add(){
    var name: string;
    if (this.cadForm.dirty && this.cadForm.valid) { // Verifica se o formulário esta válido
      this.validaCadastro(this.cadForm.value.name); //Verifica se existe duplicidade
        if (this.cadastroValido == false){
        alert(`O nome ${this.cadForm.value.name} já foi cadastrado.`);
       }else{ //Se cair aqui é por que está válido
          name = this.cadForm.value.name.trim();
          this.pessoaService.create(name)
          .then(pessoa => {
          this.pessoas.push(pessoa);
          });   
      } 
       this.cadastroValido = true;     
    }
  }
  //Verifica se existe duplicidade
   validaCadastro(name: string): void{
     for(var i=0, length = this.pessoas.length; i < length; i++){
       console.log(name);
       console.log(this.pessoas[i].name);
       if(name== this.pessoas[i].name){
           this.cadastroValido = false;
      }
    }
  }
  //Edição
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedPessoa.id]);
  }

 delete(pessoa: Pessoa): void {
    this.pessoaService
        .delete(pessoa.id)
        .then(() => {
          this.pessoas = this.pessoas.filter(h => h !== pessoa);
          if (this.selectedPessoa === pessoa) { this.selectedPessoa = null; }
        });
 }
//Seleciona a pessoa para edição
 onSelect(pessoa: Pessoa): void {
    this.selectedPessoa = pessoa;
    this.gotoDetail();    
 }
}
