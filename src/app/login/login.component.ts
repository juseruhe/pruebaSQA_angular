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

  login(){

    //console.log(this.loginUsuario)

    this.usuarioservice.loguearUsuario(this.loginUsuario.value).subscribe(respuesta => {
      console.log(respuesta)
      localStorage.setItem('token',respuesta);
      this.ruta.navigateByUrl('sqa')

    });
   
  }

  

}
