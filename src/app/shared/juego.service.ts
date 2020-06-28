import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {
  private juegos: Juego[] = [
    {
      nombre: "Bioshock",
      descrip: "BioShock es un shooter único, repleto de armas y tácticas nunca vistas. Tendrás a tu disposición un variado arsenal, desde simples revólveres hasta lanzagranadas o lanzadores químicos, pero también tendrás que modificar tu ADN para crear un arma todavía más mortífera.",
      img: "assets/img/juegos/01.jpg",
      precio: "$ 449.00",
      consola:"Xbox 360"
    },
    {
      nombre: "The Last of Us Part II",
      descrip: "Cinco años después de su peligroso viaje a través de unos Estados Unidos postpandémicos, Ellie y Joel se han asentado en Jackson, Wyoming. Vivir en una próspera comunidad de supervivientes les ha otorgado paz,a pesar de la amenaza constante que suponen los infectados y viajeros desesperados. A raíz de unos violentos acontecimientos que truncan esa paz, Ellie se embarca en un viaje sin descanso para hacer justicia y conseguir cerrar ese capítulo. A medida que va dando caza a los responsables, tendrá que enfrentarse a las devastadoras consecuencias físicas y emocionales de sus actos.",
      img: "assets/img/juegos/03.jpg",
      precio: "$ 1,574.00",
      consola:"PlayStation 4"
    },
    {
      nombre: "God of War",
      descrip: "La venganza de Kratos contra los dioses del Olimpo ha quedado atrás y ahora vive como un hombre en las tierras de los dioses y monstruos nórdicos. Kratos vuelve a asumir el rol de padre, como mentor y protector de Atreus. Kratos se ve obligado a controlar la ira que lo ha caracterizado durante tanto tiempo, ya que ahora es padre en un mundo peligroso. Un comienzo totalmente nuevo: la venganza de Kratos ha quedado atrás. Será en un mundo hostil y sin piedad donde deberá luchar para sobrevivir y donde deberá enseñar a su hijo a hacer lo mismo. Una nueva arma principal y un conjunto de habilidades inéditas honran el espíritu típico de God of War y, al mismo tiempo, presentan una visión de un violento conflicto que da lugar a varias novedades dentro del género. Un mundo más oscuro y más elemental: del arte en mármol y las columnas ornamentadas del Olimpo a los salvajes bosques, montañas y cavernas típicos del relieve nórdico previkingo el juego presenta un entorno nuevo y único.",
      img: "assets/img/juegos/05.jpg",
      precio: "$ 499.00",
      consola: "PlayStation 4"
    },
    {
      nombre: "Fortnite",
      descrip: "El popular juego tipo battle royal.",
      img: "assets/img/juegos/02.jpg",
      precio: "FREE",
      consola:"Xbox 360"
    },
    {
      nombre: "GTA V",
      descrip: "El juego se desarrolla nueve años después de un atraco frustrado en Ludendorff. Michael Townley, fue dado por muerto en Nort Yankton y ha sido puesto bajo protección de los testigos por el agente corrupto del FIB. Michael deberá realizar una serie de operaciones con el objetivo de socavar a una agencia rival. Disfruta cumpliendo cada misión que se te presenta con gráficos más elaborados y detallados.",
      img: "assets/img/juegos/04.jpg",
      precio: "$ 599",
      consola: "Xbox 360"
    },
    {
      nombre: "Animal Crossing",
      descrip: "La creatividad y el encanto pacíficos te esperan mientras te arremangas y haces de tu nueva vida lo que quieras que sea. Recolecta recursos y crea todo, desde comodidades hasta herramientas útiles. Abraza tu pulgar verde mientras interactúas con flores y árboles de nuevas maneras. Configure una granja donde las reglas de lo que ocurre dentro y fuera de la casa ya no se apliquen. Haga amigos con los recién llegados, disfrute de las estaciones, salte con una pértiga a través de los ríos mientras explora, ¡y más! esta nueva adición a la serie Animal Crossing se lanza el 20 de marzo de 2020, exclusivamente para el sistema Nintendo Switch.",
      img: "assets/img/juegos/06.jpg",
      precio: "$ 1340.00",
      consola: "Nintendo Switch"
    },
    {
      nombre: "Resident Evil 7 Biohazard",
      descrip: "Disfruta de uno de los juegos más terroríficos y más aclamados de 2017 con Resident Evil 7 Gold Edition, que incluye todo el contenido del Season Pass. En la piel de Ethan Winters, explora la mansión Baker, aparentemente abandonada, y descubre la verdad que se esconde detrás de la desaparición de tu esposa. La Gold Edition contiene el juego completo, el DLC Grabaciones inéditas vol. 1 y 2, y el episodio de epílogo Final de Zoe. También incluye el DLC gratuito «No soy un héroe».",
      img: "assets/img/juegos/07.jpg",
      precio: "$ 571.00",
      consola: "Xbox 360"
    },
    {
      nombre: "The Legend of Zelda Breath of the Wild",
      descrip: "Podrás viajar por prados, bosques y cumbres montañosas para descubrir qué ha sido del asolado reino de Hyrule en esta maravillosa aventura a cielo abierto. -Lucharás contra enormes enemigos, cazarás feroces bestias y recolectarás ingredientes para preparar las comidas y elíxires que te permitirán subsistir durante tu aventura. -Los santuarios salpican el paisaje de Hyrule y están esperando a ser descubiertos por ti en cualquier orden. -Búscalos de diversas maneras y resuelve los diversos puzzles que albergan.",
      img: "assets/img/juegos/08.jpg",
      precio: "$ 999.00",
      consola: "Nintendo Switch"
    },
    {
      nombre: "Mario Kart 8 Deluxe",
      descrip: "La renovada versión de este clásico juego de carreras trae para ti la posibilidad de jugar en línea con hasta 12 jugadores y de forma local con 8 de tus amigos. -Elige uno de los 40 personajes principales para combatir y conducir sobre los 48 circuitos disponibles, entre los que incluyen los inspirados en Animal Crossing, Excitebike, The Legend of Zelda y más.",
      img: "assets/img/juegos/09.jpg",
      precio: "$ 999.00",
      consola: "Nintendo Switch"
    },

  ];

  constructor() {}

  getJuegos(): Juego[]{
    return this.juegos;
  }

  getJuego( idx: number ): Juego{
    return this.juegos[idx];
  }

  buscarJuego( nombrej: string ):number{
    let index = this.juegos.findIndex( p => p.nombre === nombrej )
    return index;
  }
}

export interface Juego{
  nombre: string;
  descrip: string;
  img: string;
  precio: string;
  consola: string;
}
