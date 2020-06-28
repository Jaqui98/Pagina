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
  xbox: boolean = false;
  nin: boolean = false;
  play: boolean = false;

  constructor( public juegoService: JuegoService, public activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe( params => { console.log( "parametro: " + params['id'] );
                                                      this.juego = juegoService.getJuego( params['id'] );
                                                      if(this.juego.consola == 'PlayStation 4'){
                                                          console.log("Entre  a play")
                                                          this.play=true;
                                                          this.xbox=false;
                                                          this.nin=false;
                                                      }
                                                      if(this.juego.consola == 'Xbox 360'){
                                                        console.log("Entre  a xbox")
                                                          this.play=false;
                                                          this.xbox=true;
                                                          this.nin=false;
                                                      }
                                                      if(this.juego.consola == 'Nintendo Switch'){

                                                        this.play=false;
                                                        this.xbox=false;
                                                        this.nin=true;
                                                        console.log("Entre  a nintendo" + this.nin);
                                                      }
                                                      console.log( this.juego );
    });
  }

  ngOnInit(): void {
  }

}
