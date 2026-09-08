import { Component } from '@angular/core';

@Component({
  selector: 'app-ex1',
  standalone: false,
  templateUrl: './ex1.html',
  styleUrls: ['./ex1.css']
})
export class Ex1 {
  nome: string = 'Carlos';
  idade: number = 25;
  curso: string = 'Sistemas de Informação';
}
