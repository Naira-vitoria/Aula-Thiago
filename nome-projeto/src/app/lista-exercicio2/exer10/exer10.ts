import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean;
}

@Component({
  selector: 'app-exer10',
  standalone: false,
  templateUrl: './exer10.html',
  styleUrl: './exer10.css',
})

export class Exer10 {

  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Teclado',
      preco: 150,
      quantidade: 3,
      promocao: true
    },
    {
      id: 2,
      nome: 'Mouse',
      preco: 80,
      quantidade: 5,
      promocao: false
    },
    {
      id: 3,
      nome: 'Monitor',
      preco: 900,
      quantidade: 2,
      promocao: true
    },
    {
      id: 4,
      nome: 'Headset',
      preco: 200,
      quantidade: 4,
      promocao: false
    },
    {
      id: 5,
      nome: 'Webcam',
      preco: 250,
      quantidade: 2,
      promocao: true
    }
  ];

  alternarPromocao(produto: Produto) {
    produto.promocao = !produto.promocao;
  }

}