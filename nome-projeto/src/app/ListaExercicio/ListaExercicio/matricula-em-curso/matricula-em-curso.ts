import { Component } from '@angular/core';

@Component({
  selector: 'app-matricula-em-curso',
  standalone: false,
  templateUrl: './matricula-em-curso.html',
  styleUrl: './matricula-em-curso.css',
})
export class MatriculaEmCurso {

  nome: string = '';
  disciplinas: number = 1;
  mensagem: string = '';

  aumentar() {
    this.disciplinas++;
  }

  diminuir() {
    if (this.disciplinas > 1) {
      this.disciplinas--;
    }
  }

  realizarMatricula() {
    this.mensagem = 'Matrícula realizada para ' + this.nome +
                    ' em ' + this.disciplinas + ' disciplinas!';
  }
}
