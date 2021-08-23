import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { UsuarioService } from '../usuario.service';

import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUsuario: FormGroup;

  constructor(
    public formulario:FormBuilder, 
    private usuarioservice:UsuarioService,
    private ruta:Router
  ) { 

    this.loginUsuario = this.formulario.group({
      email: [''],
      contrasena: [''],
    });

  }

  ngOnInit(): void {
  }

  cadenaAleatoria(){
    
    let resultado = '';
    const caracteres = 'GV9Jm2u7rmsCe65wKzPTw5jtS38n2tVEGiijklmnopqrstuvwxyz0123456789';
    const caracteresLength = caracteres.length;
    for (let i = 0; i < caracteresLength; i++) {
        resultado += caracteres.charAt(Math.floor(Math.random() * caracteresLength));
    }

    return resultado;
   
}

  login(){

    //console.log(this.loginUsuario)

    this.usuarioservice.loguearUsuario(this.loginUsuario.value).subscribe(respuesta => {
      console.log(respuesta)
      
      if(respuesta != 0) {
      localStorage.setItem('token',this.cadenaAleatoria());
      localStorage.setItem('correo',this.loginUsuario.value["email"]);
      this.ruta.navigateByUrl('sqa')
      }

      else {

        this.ruta.navigateByUrl('login');
      }

    });
   
  }


  

  

}
