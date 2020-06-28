import {FlatTreeControl} from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

interface QuestionNode {
  name: string;
  children?: QuestionNode[];
}

const TREE_DATA: QuestionNode[] = [
  {
    name: '¿Cómo hacer una compra en Game Kamel?',
    children: [
      {name: 'Realizar una compra en nuestra tienda en línea es muy fácil. Necesitas tener una tarjeta de crédito/débito ó una cuenta de Paypal para adquirir el producto que desees.'},
    ]
  }, {
    name: '¿Problemas con un pedido a domicilio?',
    children: [
      {
        name: 'Recomendamos revisar el tiempo de entrega de tu producto. Existen muchas razones por las cuales tu pedido puede ser dificl de entregar',
        children: [
          {name: 'Dirección incorrecta'},
          {name: 'No hay nadie para recibir el paquete'},
          {name: 'Formatos de la direccion'},
          {name: 'Rechazados en la direccion de entrega'},
        ]
      },
    ]
  }, {
    name: '¿Problemas con un apartado',
    children: [
      {name: 'No pude recoger el producto de mi apartado, ¿Qué sigue?: No te preocupes, puedes solicitar la cancelacion de tu apartado'},
      {name: 'Horario para recoger mi apartado: El horario para poder recogerlo depende de tu sucursal seleccionada'},
      {name: 'Me llego una notificación de apartado cancelado: Todas las preventas pueden mover su fecha de lanzamiento aunque ya este confirmada.'},
    ]
  }, {
    name: '¿Problemas con una preventa?',
    children: [
      {
        name: 'Recomendamos revisar la fecha de lanzamiento de tu producto. Nosotros podemos hacer la preventa de un producto desde mucho tiempo antes de su lanzamiento',
        children: [
            {name: 'Mi producto de preventa cambío su fecha de lanzamiento: Todas las preventas pueden mover su fecha de lanzamiento aunque ya este confirmada'},
            {name: 'Mi preventa no tiene fecha de lanzamiento confirmado: Hay productos que son muy deseados en nuestro mercado mexicano. Para brindarte el mejor servicio posible abrimos la preventa de esos productos desde antes que haya una confirmación en su fecha de lanzamiento'},
        ]
      },
    ]
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

/**
 * @title Tree with flat nodes
 */

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  private _transformer = (node: QuestionNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  ngOnInit(): void {
  }
}


