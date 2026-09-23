import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {

  cabecalhoLoja = "lojaAngular";
  protected readonly title = signal('nome-projeto');
}
