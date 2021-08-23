import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {

  constructor(private usuarioservice: UsuarioService) { 

    
  }



  ngOnInit(): void {
  }

  

}
