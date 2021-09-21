import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreacionRecetasPage } from './creacion-recetas.page';

const routes: Routes = [
  {
    path: '',
    component: CreacionRecetasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreacionRecetasPageRoutingModule {}
