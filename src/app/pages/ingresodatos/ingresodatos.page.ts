import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresodatos',
  templateUrl: './ingresodatos.page.html',
  styleUrls: ['./ingresodatos.page.scss'],
})
export class IngresodatosPage implements OnInit {
  usuario = {

    nombre:'',

    edad:'',
  
    email:'',

    password:''

  }
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){

    console.log('submit');

    console.log(this.usuario);

  }

}
