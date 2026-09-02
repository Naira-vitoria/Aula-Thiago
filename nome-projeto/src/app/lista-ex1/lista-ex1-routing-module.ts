import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [ {
  path: "",
  loadChildren: () => import('./lista-ex1-module'). then(m => m.ListaEx1Module)
}


 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaEx1RoutingModule {}
