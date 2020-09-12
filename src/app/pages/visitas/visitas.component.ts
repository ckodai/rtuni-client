import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService, NbDialogRef } from '@nebular/theme';
import { VisitaService } from '../../@core/services/visitas.service';
import { AddVisitaDialogComponent } from './addVisita/addvisita.component';

@Component({
  selector: 'ngx-visitas',
  styleUrls: ['./visitas.component.scss'],
  templateUrl: './visitas.component.html',
})
export class VisitasComponent implements OnInit {

  displayedColumns: string[] = ['IdVisita', 'Observacion', 'Datetime', 'Opciones'];

  visitasSource: [];

  constructor(
    private dialogService: NbDialogService,
    private visitaService: VisitaService
  ) {}

  ngOnInit(): void {
    this.fetchVisitas();
  }

  fetchVisitas(): void {
    this.visitaService.getVisitas().subscribe((res: any) => {
      this.visitasSource = res;
      console.log(this.visitasSource);
    });
  }

  openAddVisita() {
    const addVisitaDialogRef = this.dialogService.open(AddVisitaDialogComponent, { closeOnBackdropClick: false });
    addVisitaDialogRef.onClose.subscribe(() => this.fetchVisitas());
  }

  openUserVisita(visita: any) {
    // const showPersonDiag = this.dialogService.open(ShowPersonDialogComponent, {
    //   closeOnBackdropClick: false,
    //   context: visita
    // });
  }
}

// @Component({
//   template: `
//     <nb-card>
//       <nb-card-header>Usuario</nb-card-header>
//       <nb-card-body>
//         <h3></h3>
//       </nb-card-body>
//       <nb-card-footer>
//         <button nbButton (click)="close()">Cerrar</button>
//       </nb-card-footer>
//     </nb-card>
//   `,
//   styles: [''],
// })
// export class ShowPersonDialogComponent implements OnInit {

//   user: any;

//   constructor(
//     protected dialogRef: NbDialogRef<ShowPersonDialogComponent>,
//   ) {}

//   ngOnInit() {

//   }

//   close() {
//     this.dialogRef.close();
//   }
// }
