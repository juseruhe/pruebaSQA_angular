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

  TIEMPO = "http://localhost:3000/api/tiempo"

  
  

  constructor(private clientHttp: HttpClient,
    private ruta: Router
    ) {}


  mostrarUsuarios() {
    return this.clientHttp.get(this.API);
  }

  
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
    localStorage.removeItem('correo')

    this.ruta.navigateByUrl('login');

  }

  tiempo(): Observable <any> {

    return this.clientHttp.get<any>(this.TIEMPO)

  }

  usuario(id:any): Observable <any>{

    return  this.clientHttp.get(this.API+id)

  }

  eliminar(id:any): Observable <any>{
    return this.clientHttp.delete(this.API+id)
  }

  

}
