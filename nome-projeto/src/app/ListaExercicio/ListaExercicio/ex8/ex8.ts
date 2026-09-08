import { Component } from '@angular/core';

@Component({
  selector: 'app-ex8',
  standalone: false,
  templateUrl: './ex8.html',
  styleUrl: './ex8.css',
})
export class Ex8 {
  produto: string = 'Mouse Gamer';
  preco: number = 150;
  quantidade: number = 2;
}
