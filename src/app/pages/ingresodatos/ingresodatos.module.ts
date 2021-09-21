import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresodatosPageRoutingModule } from './ingresodatos-routing.module';

import { IngresodatosPage } from './ingresodatos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresodatosPageRoutingModule
  ],
  declarations: [IngresodatosPage]
})
export class IngresodatosPageModule {}
