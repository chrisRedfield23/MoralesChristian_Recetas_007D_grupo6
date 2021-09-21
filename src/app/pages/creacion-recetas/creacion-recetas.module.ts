import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreacionRecetasPageRoutingModule } from './creacion-recetas-routing.module';

import { CreacionRecetasPage } from './creacion-recetas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreacionRecetasPageRoutingModule
  ],
  declarations: [CreacionRecetasPage]
})
export class CreacionRecetasPageModule {}
