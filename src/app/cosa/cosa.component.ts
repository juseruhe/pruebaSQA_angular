import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-cosa',
  templateUrl: './cosa.component.html',
  styleUrls: ['./cosa.component.css']
})
export class CosaComponent implements OnInit {

  formularioUsuario: FormGroup
  spinner = false
  obtenerID: any
  usuario: any

  constructor(private servicio:UsuarioService,
    public formulario:FormBuilder, 
    private ruta:Router, 
    private activarRuta: ActivatedRoute) {

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
 
   this.obtenerID = this.activarRuta.snapshot.paramMap.get('id')

    console.log(this.obtenerID)

    this.servicio.usuario(this.obtenerID).subscribe(respuesta => {
      console.log(respuesta)
      this.usuario = respuesta

      this.formularioUsuario.setValue({
        id: respuesta['id'],
        nombre: respuesta['nombre'],
        apellido: respuesta['apellido'],
        cedula: respuesta['cedula'],
        email: respuesta['email'],
        contrasena: respuesta['contrasena'],
      })

      console.log()
    })


    
  }

  actualizar(){
    this.servicio.actualizar(this.formularioUsuario.value["id"],this.formularioUsuario.value).subscribe()

    this.ruta.navigateByUrl('usuario/'+this.formularioUsuario.value["id"])
  }

}
