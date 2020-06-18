import { Component, OnInit, ViewChild } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { MapService } from '../../../@core/services/map.service';
import { LugarService } from '../../../@core/services/lugar.service';

@Component({
  selector: 'ngx-addlugar-dialog',
  styleUrls: ['./addlugar.component.scss'],
  templateUrl: './addlugar.component.html'
})
export class AddLugarDialogComponent implements OnInit {

  LngLat: string;
  accept = ".png, .jpg, .jpeg";

  fileToUpload: File = null;
  observacion: string;
  nombre: string;
  habilitado: boolean;

  constructor(
    protected dialogRef: NbDialogRef<AddLugarDialogComponent>,
    private mapService: MapService,
    private lugarService: LugarService
  ) { }

  ngOnInit() {
    this.mapService.buildMap('mapLugarContainer', this.callBackReturnLngLat);
  }

  callBackReturnLngLat = (result: any): void => {
    this.LngLat = Object.values(result).toString();
  }

  handleImgInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  handleObservacion(ev: any) {
    this.observacion = ev.target.value;
  }

  handleNombre(ev: any) {
    this.nombre = ev.target.value;
  }

  handleHabilitado(checked: boolean) {
    this.habilitado = checked;
  }

  doPostLugar() {

  }

  close() {
    const sendT = {
      observacion: this.observacion,
      nombre: this.nombre,
      habilitado: this.habilitado,
      location: this.LngLat
    };

    this.lugarService.saveFotoLugar(this.fileToUpload, sendT).subscribe((res: any) => {
      if(res){
        console.log("Listo!");
      }
    });

    //this.dialogRef.close();
  }
}
