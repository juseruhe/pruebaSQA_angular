import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';

import { MatMenuModule } from '@angular/material/menu';

import {MatButtonModule} from '@angular/material/button';

import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import {MatInputModule} from '@angular/material/input';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';

import {MatTableModule} from '@angular/material/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SQAComponent } from './sqa/sqa.component';

import { AuthGuard } from './auth.guard';

import { TokenService } from './token.service';

import {MatGridListModule} from '@angular/material/grid-list';

import {MatSidenavModule} from '@angular/material/sidenav';

import {MatIconModule} from '@angular/material/icon';
import { InicioComponent } from './inicio/inicio.component';

import {MatProgressBarModule} from '@angular/material/progress-bar';

import {MatCardModule} from '@angular/material/card';

import {MatPaginatorModule} from '@angular/material/paginator';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {MatRadioModule} from '@angular/material/radio';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    LoginComponent,
    MainComponent,
    CrearUsuarioComponent,
    SQAComponent,
    InicioComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatTableModule,
  ],
  providers: [
    AuthGuard, {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
