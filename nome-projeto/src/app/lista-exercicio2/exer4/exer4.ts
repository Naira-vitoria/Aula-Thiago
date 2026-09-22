import { Component } from '@angular/core';

@Component({
  selector: 'app-exer4',
  standalone: false,
  templateUrl: './exer4.html',
  styleUrl: './exer4.css',
})

export class Exer4 {

  nomeProduto = 'Teclado';
  quantidadeEstoque = 5;

  adicionarProduto() {
    this.quantidadeEstoque++;
  }

  removerProduto() {
    if (this.quantidadeEstoque > 0) {
      this.quantidadeEstoque--;
    }
  }

}