import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioregistroPageRoutingModule } from './formularioregistro-routing.module';

import { FormularioregistroPage } from './formularioregistro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioregistroPageRoutingModule
  ],
  declarations: [FormularioregistroPage]
})
export class FormularioregistroPageModule {}
