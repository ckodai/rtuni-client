import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

// interface TreeNode<T> {
//   data: T;
//   children?: TreeNode<T>[];
//   expanded?: boolean;
// }

// interface FSEntry {
//   name: string;
//   size: string;
//   kind: string;
//   items?: number;
// }

@Component({
  selector: 'ngx-lugares',
  styleUrls: ['./lugares.component.scss'],
  templateUrl: './lugares.component.html',
})
export class LugaresComponent {

  settings = {
    mode: 'inline',
    actions: null,
    hideSubHeader: true,
    columns: {
      id: {
        title: 'ID',
        editable: false,
        addable: false,
      },
      nombre: {
        title: 'Nombre',
        editable: false,
        addable: false,
      },
      observacion: {
        title: 'Observacion',
        editable: false,
        addable: false,
      },
      estado: {
        title: 'Estado',
        editable: false,
        addable: false,
      },
      ubicacion: {
        title: 'Ubicacion',
        editable: false,
        addable: false
      },
      imagen: {
        title: 'Imagen',
        editable: false,
        addable: false,
        renderComponent: RenderLugarImageComponent
      },
    }
  };

  data = [
    {
      id: 1,
      nombre: "FEC",
      observacion: "Sin observacion",
      estado: "Disponible",
      ubicacion: "75.16576, -16.8998",
      imagen: "Sin definir"
    },
    {
      id: 2,
      nombre: "Postgrado",
      observacion: "Sin observacion",
      estado: "Disponible",
      ubicacion: "75.16576, -16.8998",
      imagen: "Sin definir"
    },
    {
      id: 3,
      nombre: "NIC.NI",
      observacion: "Sin observacion",
      estado: "Disponible",
      ubicacion: "75.16576, -16.8998",
      imagen: "Sin definir"
    },
    {
      id: 4,
      nombre: "Postgrado",
      observacion: "Sin observacion",
      estado: "Disponible",
      ubicacion: "75.16576, -16.8998",
      imagen: "Sin definir"
    },
    {
      id: 5,
      nombre: "NIC.NI",
      observacion: "Sin observacion",
      estado: "Disponible",
      ubicacion: "75.16576, -16.8998",
      imagen: "Sin definir"
    },
  ];

  constructor(

  ) {}

}

@Component({
  template: `
    <img src="{{renderValue}}" />
  `,
})
export class RenderLugarImageComponent implements ViewCell, OnInit {

  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit() {
    this.renderValue = this.value.toString();
  }

}
