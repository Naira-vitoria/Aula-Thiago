import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Ex1 } from './ListaExercicio/ListaExercicio/ex1';
import {Ex2}  from './ListaExercicio/ListaExercicio/ex2/ex2';
import { Ex3 } from './ListaExercicio/LisraExercicio/ex3/ex3';
import { Ex4 } from './ListaExercicio/LisraExercicio/ex4/ex4';
import { Ex5 } from './ListaExercicio/ListaExercicio/ex5/ex5';

const routes: Routes = [
 
  {
    path: 'exercicio1',
    component: Ex1
  },
  
  {
    path: 'exercicio2',
    component: Ex2
  },
  {
    path: 'exercicio3',
    component: Ex3
  },

  {
   path: 'exercicio4',
  component: Ex4 
  },

  {
    path: 'exercicio5',
    component: Ex5
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }