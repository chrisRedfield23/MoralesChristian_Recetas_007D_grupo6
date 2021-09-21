import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-creacion-recetas',
  templateUrl: './creacion-recetas.page.html',
  styleUrls: ['./creacion-recetas.page.scss'],
})


export class CreacionRecetasPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }
  openMenu(){
    this.menu.toggle("first");
    
    }

}
