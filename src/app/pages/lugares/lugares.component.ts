import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AddLugarDialogComponent } from './addLugar/addlugar.component';
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

  displayedColumns: string[] = ['IdLugar', 'Nombre', 'Observacion', 'Estado', 'Imagen'];

  lugaresSource = [
    { IdLugar: 1,  Nombre: 'FEC', Observacion: 'Undefined', Estado: '1', Imagen: 'NULL' },
    { IdLugar: 2,  Nombre: 'FEC', Observacion: 'Undefined', Estado: '1', Imagen: 'NULL' },
    { IdLugar: 3,  Nombre: 'FEC', Observacion: 'Undefined', Estado: '1', Imagen: 'NULL' },
    { IdLugar: 4,  Nombre: 'FEC', Observacion: 'Undefined', Estado: '1', Imagen: 'NULL' },
    { IdLugar: 5,  Nombre: 'FEC', Observacion: 'Undefined', Estado: '1', Imagen: 'NULL' },
  ]

  constructor(
    private dialogService: NbDialogService
  ) {}

  openAddLugar() {
    const openLugarDialogRef = this.dialogService.open(AddLugarDialogComponent, { closeOnBackdropClick: false });
  }

}
