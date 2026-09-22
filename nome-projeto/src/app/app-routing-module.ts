import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Ex1 } from './ListaExercicio/ListaExercicio/ex1';
import {Ex2}  from './ListaExercicio/ListaExercicio/ex2/ex2';
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
import { Exer1 } from './lista-exercicio2/exer1/exer1';
import { Exer2 } from './lista-exercicio2/exer2/exer2';
import { Exer3 } from './lista-exercicio2/exer3/exer3';
import { Exer4 } from './lista-exercicio2/exer4/exer4';
import { Exer5 } from './lista-exercicio2/exer5/exer5';
import { Exer6 } from './lista-exercicio2/exer6/exer6';
import { Exer7 } from './lista-exercicio2/exer7/exer7';
import { Exer8 } from './lista-exercicio2/exer8/exer8';
import { Exer9 } from './lista-exercicio2/exer9/exer9';
import { Exer10 } from './lista-exercicio2/exer10/exer10';
import { Exer11 } from './lista-exercicio2/exer11/exer11';
import { Exer12 } from './lista-exercicio2/exer12/exer12';
import { Exer13 } from './lista-exercicio2/exer13/exer13';




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
  },

  {
    path: 'exercicio6',
    component: Ex6
  },

  {
    path: 'exercicio7',
    component: Ex7
  },

  {
    path: 'exercicio8',
    component: Ex8
  },
  
  {
    path: 'exercicio9',
    component: Ex9
  },

  {
    path: 'exercicio10',
    component: Ex10
  },

  {
    path: 'exercicio11',
    component: Ex11
  },

  {
    path: 'MatriculaEmCurso',
    component: MatriculaEmCurso
  },
  
   { path:'lista2-exercicio1',
     component: Exer1
   },
  
   {
  path: 'lista2-exercicio2',
  component: Exer2
  },
   
  {
  path: 'lista2-exercicio3',
  component: Exer3
},

{
  path: 'lista2-exercicio4',
  component: Exer4
},

{
  path: 'lista2-exercicio5',
  component: Exer5
},

{
  path: 'lista2-exercicio6',
  component: Exer6
},

{
  path: 'lista2-exercicio7',
  component: Exer7
},

{
  path: 'lista2-exercicio8',
  component: Exer8
},

{
  path: 'lista2-exercicio9',
  component: Exer9
},

{
  path: 'lista2-exercicio10',
  component: Exer10
},

{
  path: 'lista2-exercicio11',
  component: Exer11
},

{
  path: 'lista2-exercicio12',
  component: Exer12
},

{
  path: 'lista2-exercicio13',
  component: Exer13
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }