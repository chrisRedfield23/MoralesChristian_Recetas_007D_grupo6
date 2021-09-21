import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioregistroPage } from './formularioregistro.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioregistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioregistroPageRoutingModule {}
