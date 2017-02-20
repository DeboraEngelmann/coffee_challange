//serviço reponsavel por manipular os dados
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Pessoa } from './pessoa';//Objeto
import {Turno} from './turno';

@Injectable()
export class PessoaService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private pessoasUrl = 'api/pessoas';// URL da web api
  private turnosUrl = 'api/turnos';// URL da web api
    
  constructor(private http: Http) { }
  // Retorna a tabela de pessoas
  getPessoas(): Promise<Pessoa[]> {
    return this.http.get(this.pessoasUrl)
               .toPromise()
               .then(response => response.json().data as Pessoa[])
               .catch(this.handleError);
  }
  //Retorna a lista de turnos
  getTurnos(): Promise<Turno[]> {
    return this.http.get(this.turnosUrl)
               .toPromise()
               .then(response => response.json().data as Turno[])
               .catch(this.handleError);
  }
  //Retorna o item referente ao id selecionado
  getPessoa(id: number): Promise<Pessoa> {
    const url = `${this.pessoasUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Pessoa)
      .catch(this.handleError);
  }  
  //Deleta o item referente ao id selecionado
  delete(id: number): Promise<void> {
    const url = `${this.pessoasUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }  
  //Cria um novo item na lista
  create(name: string): Promise<Pessoa> {
    return this.http
      .post(this.pessoasUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }  
  //Atualiza o item da lista pessoas
  update(pessoa: Pessoa): Promise<Pessoa> {
    const url = `${this.pessoasUrl}/${pessoa.id}`;
    return this.http
      .put(url, JSON.stringify(pessoa), {headers: this.headers})
      .toPromise()
      .then(() => pessoa)
      .catch(this.handleError);
  }
  //Atualiza o item da lista turnos
  updateTurnos(turnos: Turno): Promise<Turno> {
    const url = `${this.turnosUrl}/${turnos.id}`;
    return this.http
      .put(url, JSON.stringify(turnos), {headers: this.headers})
      .toPromise()
      .then(() => turnos)
      .catch(this.handleError);
  }  
  //Retorna se houver algum erro
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}