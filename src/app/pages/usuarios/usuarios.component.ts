import { Component, Input, OnInit } from '@angular/core';
import { UsuarioService } from '../../@core/services/usuario.service';

@Component({
  selector: 'ngx-usuarios',
  styleUrls: ['./usuario.component.scss'],
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  displayedColumns: string[] = ['IdUsuario', 'Edad', 'Origen', 'Nombre', 'Clasificacion'];

  usuariosSource: [];

  constructor(
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.fetchUsuarios();
  }

  fetchUsuarios() {
    this.usuarioService.getUsuarios().subscribe((res: any) => {
      this.usuariosSource = res;
    });
  }
}
