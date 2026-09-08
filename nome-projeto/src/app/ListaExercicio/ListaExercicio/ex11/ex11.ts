import { Component } from '@angular/core';

@Component({
  selector: 'app-ex11',
  standalone: false,
  templateUrl: './ex11.html',
  styleUrl: './ex11.css',
})
export class Ex11 {
  
  produto: string = 'Mouse Gamer';
  preco: number = 120;
  quantidade: number = 1;
  mensagem: string = '';

  aumentar() {
    this.quantidade++;
  }

  diminuir() {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  adicionarCarrinho() {
    this.mensagem = 'Você adicionou ' + this.quantidade + ' ' + this.produto + ' ao carrinho!';
  }
}
