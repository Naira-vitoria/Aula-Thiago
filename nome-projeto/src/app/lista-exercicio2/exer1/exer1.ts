import { Component } from '@angular/core';

@Component({
  selector: 'app-exer1',
  standalone: false,
  templateUrl: './exer1.html',
  styleUrl: './exer1.css',
})
export class Exer1 {

   mensagemVisivel: boolean = false;

  alternarMensagem() {
    this.mensagemVisivel = !this.mensagemVisivel;
  }
}
