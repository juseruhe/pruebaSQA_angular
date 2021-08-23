import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../usuario.service';

import { FormBuilder, FormGroup } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sqa',
  templateUrl: './sqa.component.html',
  styleUrls: ['./sqa.component.css']
})
export class SQAComponent implements OnInit {

  Usuarios: any
    
  

  formularioUsuario: FormGroup

  constructor(private usuarioservice: UsuarioService,public formulario:FormBuilder,
    private activeRoute: ActivatedRoute

    
    ) { 

     


      this.usuarioservice.consultarDatosCorreo(localStorage.getItem('correo')).subscribe(respuesta => {
        console.log(respuesta)

        this.Usuarios = respuesta

        console.log(this.Usuarios)


        this.formularioUsuario.setValue({
          id: respuesta["id"],
          nombre: respuesta["nombre"],
          apellido: respuesta["apellido"],
          cedula: respuesta["cedula"],
          email: respuesta["email"],
          contrasena: respuesta["contrasena"]
        })
      });


      this.formularioUsuario = this.formulario.group({
        id: [''],
        nombre: [''],
        apellido: [''],
        cedula: [''],
        email: [''],
        contrasena: [''],
      });
}

  ngOnInit(): void {
  }

  actualizar():any{

    console.log(this.formularioUsuario.value)

    this.usuarioservice.actualizar(this.formularioUsuario.value["id"],this.formularioUsuario.value).subscribe( respuesta => {
     console.log(respuesta)
    })

    
       
  }
   
    
    
 

}
