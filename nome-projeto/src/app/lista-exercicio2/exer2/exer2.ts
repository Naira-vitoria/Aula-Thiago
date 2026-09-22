import { Component } from '@angular/core';

@Component({
  selector: 'app-exer2',
  standalone: false,
  templateUrl: './exer2.html',
  styleUrl: './exer2.css',
})
export class Exer2 {
   usuarioLogado: boolean = false;

  alternarUsuario() {
    this.usuarioLogado = !this.usuarioLogado;
  }
}
