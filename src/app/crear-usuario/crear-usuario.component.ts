import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { UsuarioService } from '../usuario.service';

import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

formularioUsuario: FormGroup


  constructor(public formulario:FormBuilder, 
    private usuarioservice:UsuarioService,
    private ruta:Router
    ) {

    this.formularioUsuario = this.formulario.group({
      nombre: [''],
      apellido: [''],
      cedula: [''],
      email: [''],
      contrasena: [''],
    });


   }



  ngOnInit(): void {


    
  }

  registrar():any{

    console.log("Recepciona Datos!!")

    console.log(this.formularioUsuario)

   this.usuarioservice.registrarUsuario(this.formularioUsuario.value).subscribe();

    this.ruta.navigateByUrl('/');
  
  
  }
}
