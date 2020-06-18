import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { LugaresComponent } from './lugares.component';
import { MatTableModule } from '@angular/material/table';
import { AddLugarDialogComponent } from './addLugar/addlugar.component';

import {
  NbCardModule,
  NbButtonModule,
  NbIconModule,
  NbDialogModule,
  NbInputModule,
  NbCheckboxModule
} from '@nebular/theme';

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
  ],
  declarations: [
    LugaresComponent,
    AddLugarDialogComponent
  ]
})
export class LugarModule {}
