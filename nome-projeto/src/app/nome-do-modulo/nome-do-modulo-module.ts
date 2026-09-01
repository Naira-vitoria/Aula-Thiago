import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NomeDoModuloRoutingModule } from './nome-do-modulo-routing-module';
import { NomeDoComponente } from './nome-do-componente/nome-do-componente';

@NgModule({
  declarations: [NomeDoComponente],
  imports: [CommonModule, NomeDoModuloRoutingModule],
})
export class NomeDoModuloModule {}
