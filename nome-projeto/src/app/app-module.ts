import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CurrencyPipe } from '@angular/common';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Cadastro } from './cadastro/cadastro';
import { Ex1 } from './ListaExercicio/ListaExercicio/ex1';
import { Ex2 } from './ListaExercicio/ListaExercicio/ex2/ex2';
import { Ex3 } from './ListaExercicio/LisraExercicio/ex3/ex3';
import { Ex4 } from './ListaExercicio/LisraExercicio/ex4/ex4';
import { Ew5 } from './ListaExercicio/ListaExercicio/ex5/ew5';
import { Ex5 } from './ListaExercicio/ListaExercicio/ex5/ex5';
@NgModule({
  declarations: [App, Cadastro, Ex1, Ex2, Ex3, Ex4, Ew5, Ex5],
  imports: [BrowserModule, AppRoutingModule, CurrencyPipe],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
