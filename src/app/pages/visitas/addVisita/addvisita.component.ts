import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { VisitaService } from '../../../@core/services/visitas.service';

@Component({
  selector: 'ngx-addvisita',
  styleUrls: ['./addvisita.component.scss'],
  templateUrl: './addvisita.component.html'
})
export class AddVisitaDialogComponent implements OnInit  {

  Nombre: string;
  Edad: number;
  Origen: string;
  Clasificacion: string;
  Observacion: string;

  constructor(
    protected dialogRef: NbDialogRef<AddVisitaDialogComponent>,
    private visitaService: VisitaService
  ) {}

  ngOnInit(): void {

  }

  handleNombre(ev: any) {
    this.Nombre = ev.target.value;
  }

  handleEdad(ev: any) {
    this.Edad =  parseInt(ev.target.value);
  }

  handleOrigen(ev: any) {
    this.Origen = ev.target.value;
  }

  handleClasificacion(ev: any) {
    this.Clasificacion = ev.target.value;
  }

  handleObservacion(ev: any) {
    this.Observacion = ev.target.value;
  }

  Close() {
    this.dialogRef.close();
  }

  Send() {
    const senT = {
      Nombre: this.Nombre,
      Edad: this.Edad,
      Origen: this.Origen,
      Clasificacion: this.Clasificacion,
      Observacion: this.Observacion
    }

    // do post
    this.visitaService.saveVisita(senT).subscribe((res: any) => {
      if(res){
        this.dialogRef.close();
      }
    });
  }
}
