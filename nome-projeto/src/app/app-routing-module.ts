import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Ex1 } from './ListaExercicio/ListaExercicio/ex1';
import {Ex2}  from './ListaExercicio/ListaExercicio/ex2/ex2';

const routes: Routes = [
 
  {
    path: 'exercicio1',
    component: Ex1
  },
  
  {
    path: 'exercicio2',
    component: Ex2
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }