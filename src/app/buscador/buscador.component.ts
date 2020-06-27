import { Component, OnInit } from '@angular/core';
import { JuegoService, Juego } from './../shared/juego.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  nombrej: string;
  indice: number;
  mijuego: Juego;

  constructor( private juegoService: JuegoService, private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe( params => {
      this.nombrej = params['nombrej'];
      this.indice = this.juegoService.buscarJuego( this.nombrej );
      console.log(this.indice);
      if ( this.indice != -1 ){
        this.mijuego = this.juegoService.getJuego( this.indice );
      }
    });
   }

  ngOnInit(): void {
  }

}
