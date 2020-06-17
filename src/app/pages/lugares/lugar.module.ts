import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { LugaresComponent, RenderLugarImageComponent } from './lugares.component';

import {
  NbCardModule,
  NbButtonModule,
  NbIconModule
} from '@nebular/theme';

@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    Ng2SmartTableModule
  ],
  declarations: [
    LugaresComponent,
    RenderLugarImageComponent
  ]
})
export class LugarModule {}
