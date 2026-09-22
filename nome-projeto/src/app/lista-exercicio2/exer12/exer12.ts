import { Component } from '@angular/core';

interface Produto {
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-exer12',
  standalone: false,
  templateUrl: './exer12.html',
  styleUrl: './exer12.css',
})
export class Exer12 {
  nomeProduto: string = '';
  quantidadeProduto: number | null = null;

  mensagemErro: string = '';

  produtos: Produto[] = [];

  cadastrar() {
    if (
      this.nomeProduto.trim() === '' ||
      this.quantidadeProduto === null ||
      this.quantidadeProduto < 0
    ) {
      this.mensagemErro = 'Não foi possível realizar o cadastro.';
      return;
    }

    this.produtos.push({
      nome: this.nomeProduto,
      quantidade: this.quantidadeProduto
    });

    this.nomeProduto = '';
    this.quantidadeProduto = null;
    this.mensagemErro = '';
  }

  excluir(index: number) {
    this.produtos.splice(index, 1);
  }
}
