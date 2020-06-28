import { Component, OnInit } from '@angular/core';
import { JuegoService, Juego } from './../shared/juego.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  misjuegos: Juego[] = [];

  constructor( public juegoServise: JuegoService, public router: Router ) {
    console.log("Constructor de JuegosComponent");
   }

  ngOnInit(): void {
    console.log("ngOnInit de JuegosComponent");
    this.misjuegos = this.juegoServise.getJuegos();
    console.log(this.misjuegos);
  }

}
