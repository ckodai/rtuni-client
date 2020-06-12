import { Component, OnInit, OnDestroy , Input } from '@angular/core';
import { MapService } from '../../../@core/services/map.service';

@Component({
  selector: 'ngx-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {

  constructor(
    private mapService: MapService
  ) { }

  ngOnInit(): void {
    this.mapService.buildMap();
  }

  ngOnDestroy(): void {
    this.mapService.stopTracking();
  }

}
