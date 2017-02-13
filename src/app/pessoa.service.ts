//serviço reponsavel por manipular os dados
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

//Objeto
import { Pessoa } from './pessoa';

@Injectable()
export class PessoaService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private pessoasUrl = 'api/pessoas';  // URL to web api

  constructor(private http: Http) { }

  getPessoas(): Promise<Pessoa[]> {
    return this.http.get(this.pessoasUrl)
               .toPromise()
               .then(response => response.json().data as Pessoa[])
               .catch(this.handleError);
  }


  getPessoa(id: number): Promise<Pessoa> {
    const url = `${this.pessoasUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Pessoa)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.pessoasUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Pessoa> {
    return this.http
      .post(this.pessoasUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(pessoa: Pessoa): Promise<Pessoa> {
    const url = `${this.pessoasUrl}/${pessoa.id}`;
    return this.http
      .put(url, JSON.stringify(pessoa), {headers: this.headers})
      .toPromise()
      .then(() => pessoa)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}