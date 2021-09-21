import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.page.html',
  styleUrls: ['./loginuser.page.scss'],
})
export class LoginuserPage implements OnInit {

  usuario = {
  
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
