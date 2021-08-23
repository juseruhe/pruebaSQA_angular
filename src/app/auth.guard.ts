import { Injectable } from '@angular/core';
import {  CanActivate } from '@angular/router';
import { UsuarioService } from './usuario.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})



export class AuthGuard implements CanActivate {

  constructor(private usuarioservice:UsuarioService,
    private ruta: Router){

  }
  

  canActivate(): boolean{

    if(this.usuarioservice.confirmarLogin()){

      return true;
    }

    this.ruta.navigateByUrl('login')

    return false;
    
  }
  
}
