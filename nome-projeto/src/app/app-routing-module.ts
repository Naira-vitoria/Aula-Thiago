import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Ex1 } from './ListaExercicio/ListaExercicio/ex1';
import {Ex2}  from './ListaExercicio/ListaExercicio/ex2/ex2';
import { Ex3 } from './ListaExercicio/LisraExercicio/ex3/ex3';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }