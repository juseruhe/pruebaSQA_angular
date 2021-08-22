import { Injectable } from '@angular/core';

import { Usuario } from './usuario';

import { HttpClient }  from '@angular/common/http';

import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  API = "http://localhost:8000/api/usuario/";
  

  constructor(private clientHttp: HttpClient) {}

  
  registrarUsuario(datosUsuario: Usuario): Observable<any> {

    return this.clientHttp.post(this.API,datosUsuario)
  }
 


}
