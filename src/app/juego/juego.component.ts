import { Component, OnInit, Input } from '@angular/core';
import { JuegoService, Juego } from './../shared/juego.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  @Input() juego: Juego;

  constructor( public juegoService: JuegoService, public activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe( params => { console.log( "parametro: " + params['id'] );
                                                      this.juego = juegoService.getJuego( params['id'] );
                                                      console.log( this.juego );
    });
  }

  ngOnInit(): void {
  }

}
