import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { RealtimeModule } from './realtime/realtime.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

import { LugarModule } from './lugares/lugar.module';
import { VisitasModule } from './visitas/visitas.module';
import { UsuariosModule } from './usuarios/usuario.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    RealtimeModule,
    LugarModule,
    VisitasModule,
    UsuariosModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent
  ],
})
export class PagesModule {
}
