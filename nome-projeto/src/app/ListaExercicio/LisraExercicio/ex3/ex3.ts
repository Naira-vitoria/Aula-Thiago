import { Component } from '@angular/core';

@Component({
  selector: 'app-ex3',
  standalone: false,
  templateUrl: './ex3.html',
  styleUrl: './ex3.css',
})
export class Ex3 {

  imagemProduto: String = 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/6192/live/61bb3530-f641-11ee-91c5-c92e09ae6ba7.jpg.webp';

  descricaoImagem: String = 'Até no eclipse, há beleza no caminho.'
}
