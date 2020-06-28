import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './usuarios/home/home.component';
import { JuegosComponent } from './usuarios/juegos/juegos.component';
import { AboutComponent } from './usuarios/about/about.component';
import { ContactComponent } from './usuarios/contact/contact.component';
import { QuestionComponent } from './usuarios/question/question.component';
import { LoginComponent } from './usuarios/login/login.component';
import { RegistroComponent } from './usuarios/registro/registro.component';
import { JuegoComponent } from './usuarios/juego/juego.component';
import { BuscadorComponent } from './usuarios/buscador/buscador.component';
import { PanelComponent } from './admin/panel/panel.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';



const routes: Routes = [
  //Administrador
  { path: 'admin',component:PanelComponent},
  { path: 'dash',component:DashboardComponent},
  //Usuario
  { path: 'home', component: HomeComponent },
  { path: 'juegos', component: JuegosComponent },
  { path: 'juego/:id', component: JuegoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'login', component: LoginComponent },
   { path: 'registro', component: RegistroComponent },
  { path: 'buscador/:nombrej', component: BuscadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
