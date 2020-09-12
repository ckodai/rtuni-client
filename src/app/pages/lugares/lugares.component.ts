import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AddLugarDialogComponent } from './addLugar/addlugar.component';
import { LugarService } from '../../@core/services/lugar.service';
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
export class LugaresComponent implements OnInit {

  displayedColumns: string[] = ['IdLugar', 'Nombre', 'Observacion', 'Estado'];

  lugaresSource: [];

  constructor(
    private dialogService: NbDialogService,
    private lugarService: LugarService
  ) {}

  ngOnInit(): void {
    this.fetchLugares();
  }

  fetchLugares() {
    this.lugarService.getLugares().subscribe((lugares: any) => {
      this.lugaresSource = lugares;
    })
  }

  openAddLugar() {
    const openLugarDialogRef = this.dialogService.open(AddLugarDialogComponent, { closeOnBackdropClick: false });
    openLugarDialogRef.onClose.subscribe(() => this.fetchLugares());
  }

}
