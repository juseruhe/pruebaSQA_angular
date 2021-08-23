import { Injectable } from '@angular/core';

import { Usuario } from './usuario';

import { HttpClient }  from '@angular/common/http';

import {  Observable } from 'rxjs';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  API = "http://localhost:8000/api/usuario/";

  LOGIN = "http://localhost:8000/api/login";

  
  

  constructor(private clientHttp: HttpClient,
    private ruta: Router
    ) {}

  
  registrarUsuario(datosUsuario: Usuario): Observable<any> {

    return this.clientHttp.post(this.API,datosUsuario)
  }

  loguearUsuario(datosUsuario: Usuario): Observable<any>{

    return this.clientHttp.post(this.LOGIN,datosUsuario)
  }
 
  confirmarLogin(){
   return  !!localStorage.getItem('token');
  }

  obtenerToken(){
    return localStorage.getItem('token');
  }

  obtenerCorreo(){
    return localStorage.getItem('correo');
  }


  consultarDatosCorreo(name:any): Observable<any>{

    return this.clientHttp.get(this.LOGIN+'/correo/'+name);
  }


  actualizar(id:any,datosUsuario: Usuario): Observable<any>{
    return this.clientHttp.put(this.API+id,datosUsuario)
  }


  logout(){
    localStorage.removeItem('token');

    this.ruta.navigateByUrl('login');

  }


}
