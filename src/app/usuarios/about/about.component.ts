import { Component, OnInit } from '@angular/core';
import {
  SpeechSynthesisUtteranceFactoryService,
  SpeechSynthesisService,
} from '@kamiazya/ngx-speech-synthesis';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  contents = [
    'GAMES KAMEL',
    'Acerca de Nosotros',
    'Fundada en 1998',
    '¿Quiénes somos?',
    'Nuestra historia',
    'Somos una empresa dedicada a la venta de videjuegos, nuestro canal principal de ventas es online sin embargo también contamos con tiendas en el Distrito Federal.',
    'GAMES KAMEL fue creada en 1998 en mercado libre y tuvo buena aceptación por parte de los clientes ya que les llevamos sus videojuegos hasta el lugar mas recondito de México. Gracias a eso hoy somos la tienda #1 en venta de videojuegos en MercadoLibre',
    'Actualmente somos un equipo de 10 personas y día a día trabajamos para darte el mejor precio y servicio.',
    'Nuestros Objetivos',
    'Lo que queremos lograr...',
    'El propósito de nuestra página web es brindar un servicio de compra de videojuegos para un público en general.  Contaremos con un amplio catalogo de videojuegos para cualquier edad y se mantendrá actualizado el contenido.',
    'Se tendrá una interfaz amigable. La comunicación con el usuario será eficiente y rápida.',
    'Lo que pretendemos transmitir es una opción de adquirir un videojuego de forma sencilla, cómoda y agradable. Nuestro catalogo tendrá un precio especial a comparación de otras p+aginas de ventas de videojuegos.',
  ];

  constructor(
    public f: SpeechSynthesisUtteranceFactoryService,
    public svc: SpeechSynthesisService,
  ) { }

  speech() {
    for (const text of this.contents) {
      this.svc.speak(this.f.text(text));
    }
  }

  detener(){
    this.svc.pause();
  }

  ngOnInit(): void {
  }

}
