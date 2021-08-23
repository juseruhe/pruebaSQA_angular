import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SQAComponent } from './sqa/sqa.component';

import { AuthGuard } from './auth.guard';


const routes: Routes = [

{path: '', component: MainComponent},
{path: 'login',component: LoginComponent},
{path: 'registrar',component: CrearUsuarioComponent},
{path: 'sqa',component: SQAComponent, canActivate: [AuthGuard]},

  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
