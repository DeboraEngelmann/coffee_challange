//Local Storage 
import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let pessoas = [
      {id: 1, name: 'PessoaExemplo'}      
    ],  
    turnos = [
    { id: 1, name: 'Segunda-Feira/Manhã', pessoa: ''},
    { id: 2, name: 'Segunda-Feira/Tarde', pessoa: ''},
    { id: 3, name: 'Terça-Feira/Manhã', pessoa: '' },
    { id: 4, name: 'Terça-Feira/Tarde', pessoa: '' },
    { id: 5, name: 'Quarta-Feira/Manhã', pessoa: '' },
    { id: 6, name: 'Quarta-Feira/Tarde', pessoa: '' },
    { id: 7, name: 'Quinta-Feira/Manhã', pessoa: '' },
    { id: 8, name: 'Quinta-Feira/Tarde', pessoa: '' },
    { id: 9, name: 'Sexta-Feira/Manhã', pessoa: '' },
    { id: 10, name: 'Sexta-Feira/Tarde', pessoa: '' }
    ];
    return {pessoas,turnos};
  }
}

