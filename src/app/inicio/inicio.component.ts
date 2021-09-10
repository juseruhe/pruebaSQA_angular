import { Component, OnInit } from '@angular/core';


import { Router,ActivatedRoute } from '@angular/router';


import { UsuarioService } from '../usuario.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  Usuarios: any;

  

  constructor(private usuarioservicio: UsuarioService,
    private ruta: Router) {
    
    
  }

  ngOnInit(): void {

      this.usuarioservicio.mostrarUsuarios().subscribe(respuesta => {
        console.log(respuesta)

        this.Usuarios = respuesta

        console.log(this.Usuarios)
    
        
        
      })

       
      console.log(this.Usuarios)
      
  }

  eliminar(id:any,indice:any){
    console.log(id)

    console.log(indice)

    this.usuarioservicio.eliminar(id).subscribe(respuesta => {

      this.Usuarios.splice(indice,1)
    });

    this.ruta.navigateByUrl('inicio')

     
  }

}
