import { Component, OnInit } from '@angular/core';


import { UsuarioService } from '../usuario.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  Usuarios: any;

  

  constructor(private usuarioservicio: UsuarioService) {
    
    
  }

  ngOnInit(): void {

      this.usuarioservicio.mostrarUsuarios().subscribe(respuesta => {
        console.log(respuesta)

        this.Usuarios = respuesta

        console.log(this.Usuarios)
    
        
        
      })

       
      console.log(this.Usuarios)
      
  }

}
