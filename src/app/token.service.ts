import { Injectable } from '@angular/core';

import { HttpInterceptor } from '@angular/common/http';

import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor {


constructor(
  private usuarioservice:UsuarioService
) { }

intercept(req,next){

 const tokenReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${this.usuarioservice.obtenerToken()} `
    }
  })

  return next.handle(tokenReq);

}
}
