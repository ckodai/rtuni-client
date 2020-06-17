import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  interval: any;
  mapbox: any;
  map: mapboxgl.Map;
  style = 'mapbox://styles/michaellaurent/ckaxb0pq60cqa1inv2hna890l';
  lat = 12.130084;
  lng = -86.268567;
  zoom = 17.19;
  url = 'https://wanderdrone.appspot.com/';

  constructor() { }

  buildMap() {

    this.mapbox = (mapboxgl as typeof mapboxgl);
    this.mapbox.accessToken = environment.mapBoxToken;

    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    });

    // this.map.on('load', () => {
    //   console.log("Map loaded!");
    //   const request = new XMLHttpRequest();

    //   this.interval = setInterval(() => {
    //     request.open('GET', this.url, true);
    //     request.onload = () => {
    //       if (request.status >= 200 && request.status < 400) {
    //         const json = JSON.parse(request.response);
    //         console.log(json);

    //         (this.map.getSource('drone') as mapboxgl.GeoJSONSource).setData(json);
    //         this.map.flyTo({
    //           center: json.geometry.coordinates,
    //           speed: 0.5
    //         });
    //       }
    //     }
    //     request.send();
    //   }, 2000);

    //   this.map.addSource('drone', { type: 'geojson', data: this.url });
    //   this.map.addLayer({
    //     'id': 'drone',
    //     'type': 'symbol',
    //     'source': 'drone',
    //     'layout': {
    //     'icon-image': 'rocket-15'
    //     }
    //   });
    // });
  }

  stopTracking() {
    // clearInterval(this.interval);
    // console.log("Map destroyed!");
  }
}
