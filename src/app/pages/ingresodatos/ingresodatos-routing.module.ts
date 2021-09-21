import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresodatosPage } from './ingresodatos.page';

const routes: Routes = [
  {
    path: '',
    component: IngresodatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresodatosPageRoutingModule {}
