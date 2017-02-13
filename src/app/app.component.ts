import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/pessoas" routerLinkActive="active">Pessoas</a>
      <a routerLink="/impressao"  target="_blank" routerLinkActive="active">Rota Impressao</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./css/app.component.css'],
})
export class AppComponent {
  title = 'Tour of Pessoas';
}