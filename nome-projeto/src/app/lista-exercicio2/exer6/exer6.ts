
import { Component } from '@angular/core';

@Component({
  selector: 'app-exer6',
  standalone: false,
  templateUrl: './exer6.html',
  styleUrl: './exer6.css',
})

export class Exer6 {

  nomes = ['Ana', 'Bruno', 'Carlos', 'Daniela', 'Eduardo'];

  listaInicial = ['Ana', 'Bruno', 'Carlos', 'Daniela', 'Eduardo'];

  removerUltimo() {
    this.nomes.pop();
  }

  limparLista() {
    this.nomes = [];
  }

  restaurarLista() {
    this.nomes = [...this.listaInicial];
  }

}