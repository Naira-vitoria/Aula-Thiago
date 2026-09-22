import { Component } from '@angular/core';

@Component({
  selector: 'app-exer3',
  standalone: false,
  templateUrl: './exer3.html',
  styleUrl: './exer3.css',
})
export class Exer3 {

   idade: number = 18;

  aumentarIdade() {
    this.idade++;
  }

  diminuirIdade() {
    if (this.idade > 0) {
      this.idade--;
    }
  }
}
