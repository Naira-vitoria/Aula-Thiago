import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { Cadastro } from './cadastro/cadastro';
import { Ex1 } from './ListaExercicio/ListaExercicio/ex1';
import { Ex2 } from './ListaExercicio/ListaExercicio/ex2/ex2';
import { Ex3 } from './ListaExercicio/LisraExercicio/ex3/ex3';
import { Ex4 } from './ListaExercicio/LisraExercicio/ex4/ex4';
import { Ex5 } from './ListaExercicio/ListaExercicio/ex5/ex5';
import { Ex6 } from './ListaExercicio/ListaExercicio/ex6/ex6';
import { Ex7 } from './ListaExercicio/ListaExercicio/ex7/ex7';
import { Ex8 } from './ListaExercicio/ListaExercicio/ex8/ex8';
import { Ex9 } from './ListaExercicio/ListaExercicio/ex9/ex9';
import { Ex10 } from './ListaExercicio/ListaExercicio/ex10/ex10';
import { Ex11 } from './ListaExercicio/ListaExercicio/ex11/ex11';
import { MatriculaEmCurso } from './ListaExercicio/ListaExercicio/matricula-em-curso/matricula-em-curso';
import { ListaExercicio2Module } from './lista-exercicio2/lista-exercicio2-module';



@NgModule({
  declarations: [
    App,
    Cadastro,
    Ex1,
    Ex2,
    Ex3,
    Ex4,
    Ex5,
    Ex6,
    Ex7,
    Ex8,
    Ex9,
    Ex10,
    Ex11,
    MatriculaEmCurso,
   
    
  ],
  imports: [BrowserModule, AppRoutingModule, CurrencyPipe, FormsModule,ListaExercicio2Module],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
