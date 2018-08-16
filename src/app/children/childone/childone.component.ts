import {Component, OnInit} from '@angular/core';
import L from 'leaflet';
import {environment} from '../../../environments/environment';

declare var require: any;

@Component({
  selector: 'app-childone',
  templateUrl: './childone.component.html',
  styleUrls: ['./childone.component.css']
})
export class ChildoneComponent implements OnInit {

  leaflet: any;
  public layerCtrls:any;
  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initMap();
    this.renderDataOnMap();
  }

  initMap() {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    });

    let streetView = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: environment.mapBoxKey
    });
    let satelliteView = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.satellite',
      accessToken: environment.mapBoxKey
    });

    let mapOptions = {
      zoomSnap: 0,
      zoomDelta: 0.5,
      zoomControl: false,
      layers: [streetView]
    };

    let baseMaps = {
      '<img title=\'Satellite view\' class=\'layer-style\' src=\'/assets/images/satelliteView.png\'>': satelliteView,
      '<img title=\'Street view\' class=\'layer-style\' src=\'/assets/images/streetView.PNG\'>': streetView
    };

    this.leaflet = L.map('leafletmap', mapOptions).setView([23.224043, 72.646284], 15);
    L.control.zoom({position: 'topright'}).addTo(this.leaflet);
    this.layerCtrls = L.control.layers(baseMaps, '', {collapsed: false}).addTo(this.leaflet);

    this.leaflet.on('zoomend ', (event) => {
      if (this.leaflet.getZoom() >= 17) {
        this.leaflet.removeLayer(streetView);
        this.leaflet.addLayer(satelliteView);
      }
    });
  }

  renderDataOnMap() {

  }
}
