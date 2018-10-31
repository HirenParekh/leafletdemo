import {AfterViewInit, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {ChildoneComponent} from '../childone/childone.component';
import {LeafletService} from '../../leaflet.service';
import mapboxgl from 'mapbox-gl';
import * as turf from '@turf/turf'

import {environment} from '../../../environments/environment';
@Component({
  selector: 'app-childtwo',
  templateUrl: './childtwo.component.html',
  styleUrls: ['./childtwo.component.css']
})
export class ChildtwoComponent implements  AfterViewInit {

  _mapRef:any;
  constructor() {

  }

  coordinates = [
    [23.224043, 72.656284],
    [23.214043, 72.646284],
    [23.229204, 72.636284],
    [23.219204, 72.626284],
    [23.225204, 72.644284],
    [23.222204, 72.644284],
    [23.222204, 72.639284],
    [23.220204, 72.639284],
    [23.226504, 72.64084],
    [23.216504, 72.63084]
  ];

  initMap(){
    mapboxgl.accessToken = environment.mapBoxKey;
     this._mapRef = new mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/mapbox/streets-v9',
       center: [2.3522, 48.8566],
       zoom: 14
    });
    this._mapRef.on('load', () => {
      this._mapRef.setPaintProperty('building', 'fill-color', [
        "case",
        ["<=",["get","height"],5],
        "#00ff00",
        "#ff0000"
      ]);

      this._mapRef.setPaintProperty('building', 'fill-opacity', [
        "interpolate",
        ["exponential", 0.9],
        ["zoom"],
        15,
        0,
        22,
        1
      ]);
    });
    this._mapRef.on('click',  (e) => {
      let features = this._mapRef.queryRenderedFeatures(e.point);
      document.getElementById('features').innerHTML = JSON.stringify(features, null, 2);
      let polygon = turf.polygon(features[0].geometry.coordinates);
      let area = turf.area(polygon);
      console.log("Area => ",area);
    });
  }

  ngAfterViewInit(){
      setTimeout(() => {
          this.initMap();
      },1000)
  }

}
