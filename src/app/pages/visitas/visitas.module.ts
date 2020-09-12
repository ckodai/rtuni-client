import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {
  NbCardModule,
  NbButtonModule,
  NbIconModule,
  NbDialogModule,
  NbInputModule,
  NbCheckboxModule
} from '@nebular/theme';

import { VisitasComponent } from './visitas.component';
import { AddVisitaDialogComponent } from './addVisita/addvisita.component';

@NgModule({
  imports: [
    NbIconModule,
    NbCardModule,
    NbButtonModule,
    MatTableModule,
    NbDialogModule.forChild(),
    NbInputModule,
    NbCheckboxModule,
    MatInputModule,
    MatIconModule
  ],
  declarations: [
    //comps
    VisitasComponent,
    AddVisitaDialogComponent
  ]
})
export class VisitasModule {}
