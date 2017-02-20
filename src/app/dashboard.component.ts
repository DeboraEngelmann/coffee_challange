import { Component, OnInit } from '@angular/core';

import { Pessoa } from './pessoa';
import {Turno} from './turno';
import { PessoaService } from './pessoa.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: './view/dashboard.component.html',
  styleUrls: [ './css/dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  //Declaração de variaveis
  pessoas: Pessoa[] = [];
  turnos: Turno[] = [];
  a: number = 0;

  constructor(private pessoaService: PessoaService) { }
  //Pega a lista de pessoas e sorteia uma ordem
  getPessoas(): void {
    this.pessoaService
        .getPessoas()
        .then(pessoas => this.pessoas = pessoas.sort());
  }
  //Pega a lista de turnos
  getTurnos(): void {
    this.pessoaService
        .getTurnos()
        .then(turnos => this.turnos = turnos);
  }
  //Inicia o componente
  ngOnInit(): void {
    this.getPessoas();
    this.getTurnos();
  }
//  Gera a lista de acordo com os parâmetros estipulados
 geraLista(): void { 
  for(var j=0, length = this.turnos.length; j < length; j++){
   this.turnos[j].pessoa=this.pessoas[this.a].name;       
    if((this.pessoas.length-1) == this.a){
      this.a=0;
    }else{
      this.a++;
    }
    this.pessoaService.updateTurnos(this.turnos[j]);
  }  
 }
// Imprime a lista
  printToCart(printSectionId: string){
        let popupWinindow
        let innerContents = document.getElementById(printSectionId).innerHTML;
        popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="./app/css/dashboard.component.css" /></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
  }
}

