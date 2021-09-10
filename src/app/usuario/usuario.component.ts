import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../usuario.service';


import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  obtenerID: any

  usuario: any

  constructor(private usuarioservice:UsuarioService,
    private ruta:Router,
    private activaRuta: ActivatedRoute) { }

  ngOnInit(): void {

    this.obtenerID=this.activaRuta.snapshot.paramMap.get('id');
    console.log(this.obtenerID)

    this.usuarioservice.usuario(this.obtenerID).subscribe(respuesta => {
      console.log(respuesta)
      this.usuario = respuesta
    })

  }

  

}
