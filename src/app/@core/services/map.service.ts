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

  currentMouseLocation: string;
  markersTmp: mapboxgl.Marker[] = [];

  mockMarkes: mapboxgl.Marker[] = [];

  constructor() { }

  buildMap(container: string, callBackReturnLngLat?: (n: mapboxgl.LngLat) => any, fakeMarkers?: boolean) {

    this.mapbox = (mapboxgl as typeof mapboxgl);
    this.mapbox.accessToken = environment.mapBoxToken;

    this.map = new mapboxgl.Map({
      container,
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    });

    this.map.on('click', (ev) => {
      if(this.markersTmp.length > 0){
        this.markersTmp.forEach(e => {
          e.remove();
        });
        this.markersTmp = [];
      }

      const marker = new mapboxgl.Marker()
        .setLngLat([ev.lngLat.lng, ev.lngLat.lat])
        .addTo(this.map);

      this.markersTmp.push(marker);
      callBackReturnLngLat(ev.lngLat);
    })

    if(fakeMarkers){
      const m1 = new mapboxgl.Marker().setLngLat([-86.26991195632621,12.129262960691094])
        .addTo(this.map);
      const m2 = new mapboxgl.Marker().setLngLat([-86.2699010159545,12.129657381093395])
        .addTo(this.map);
      const m3 = new mapboxgl.Marker().setLngLat([-86.27025110832888,12.12995419878095])
        .addTo(this.map);

      // this.mockMarkes.push(m1);
      // this.mockMarkes.push(m2);
      // this.mockMarkes.push(m3);

      // const m_Leyda = new mapboxgl.Marker()
      //   .setLngLat([-86.26954207427104, 12.12887066348901])
      //   .addTo(this.map);

      // const m_m2 = new mapboxgl.Marker()
      //   .setLngLat([-86.27014709923114, 12.12925933041403])
      //   .addTo(this.map);
    }

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
