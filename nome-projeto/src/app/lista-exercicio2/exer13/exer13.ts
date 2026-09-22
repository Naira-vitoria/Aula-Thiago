import { Component } from '@angular/core';

interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: 'baixa' | 'média' | 'alta';
  concluida: boolean;
}

@Component({
  selector: 'app-exer13',
  standalone: false,
  templateUrl: './exer13.html',
  styleUrl: './exer13.css',
})
export class Exer13 {

  tarefas: Tarefa[] = [
    {
      id: 1,
      titulo: 'Criar tela de login',
      responsavel: 'Ana',
      prioridade: 'alta',
      concluida: true
    },
    {
      id: 2,
      titulo: 'Cadastrar usuários',
      responsavel: 'Bruno',
      prioridade: 'média',
      concluida: false
    },
    {
      id: 3,
      titulo: 'Criar banco de dados',
      responsavel: 'Carlos',
      prioridade: 'alta',
      concluida: false
    },
    {
      id: 4,
      titulo: 'Testar sistema',
      responsavel: 'Daniela',
      prioridade: 'baixa',
      concluida: true
    },
    {
      id: 5,
      titulo: 'Criar documentação',
      responsavel: 'Eduardo',
      prioridade: 'média',
      concluida: false
    },
    {
      id: 6,
      titulo: 'Publicar projeto',
      responsavel: 'Ana',
      prioridade: 'alta',
      concluida: true
    }
  ];

  alterarSituacao(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }

  quantidadeConcluidas(): number {
    return this.tarefas.filter(tarefa => tarefa.concluida).length;
  }

  quantidadePendentes(): number {
    return this.tarefas.filter(tarefa => !tarefa.concluida).length;
  }
}