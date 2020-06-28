import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './usuarios/navbar/navbar.component';
import { HomeComponent } from './usuarios/home/home.component';
import { JuegosComponent } from './usuarios/juegos/juegos.component';
import { AboutComponent } from './usuarios/about/about.component';
import { QuestionComponent } from './usuarios/question/question.component';
import { LoginComponent } from './usuarios/login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './usuarios/material/material.module';
// --------------------------------- SERVICIOS ---------------------------------
import { JuegoService } from './usuarios/shared/juego.service';
import { JuegoComponent } from './usuarios/juego/juego.component';
import { BuscadorComponent } from './usuarios/buscador/buscador.component';
import { FooterComponent } from './usuarios/footer/footer.component';
import { ContactComponent } from './usuarios/contact/contact.component';
import { RegistroComponent } from './usuarios/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    JuegosComponent,
    AboutComponent,
    QuestionComponent,
    LoginComponent,
    JuegoComponent,
    BuscadorComponent,
    FooterComponent,
    ContactComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [JuegoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
