import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import L from 'leaflet';
import {environment} from '../../../environments/environment';
import {isPlatformBrowser} from '@angular/common';

declare var require: any;

@Component({
  selector: 'app-childone',
  templateUrl: './childone.component.html',
  styleUrls: ['./childone.component.css']
})
export class ChildoneComponent implements OnInit {

  leaflet: any;
  aerialViewLayer: any;
  streetViewLayer: any;
  activeLayerName: string = 'automatic';
  isViewAutoChanged: boolean = false;
  isBrowser:boolean = false;
  constructor(@Inject(PLATFORM_ID) protected platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if(this.isBrowser){
      this.initMap();
      this.renderDataOnMap();
    }
  }

  initMap() {
    this.streetViewLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 25,
      id: 'mapbox.streets',
      accessToken: environment.mapBoxKey
    });
    this.aerialViewLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 30,
      id: 'mapbox.satellite',
      accessToken: environment.mapBoxKey
    });

    let mapOptions = {
      zoomSnap: 0,
      zoomDelta: 0.5,
      zoomControl: false,
      layers: [this.streetViewLayer]
    };

    let baseMaps = {
      '<img title=\'Satellite view\' class=\'layer-style\' src=\'/assets/images/satelliteView.png\'>': this.aerialViewLayer,
      '<img title=\'Street view\' class=\'layer-style\' src=\'/assets/images/streetView.PNG\'>': this.streetViewLayer
    };

    this.leaflet = L.map('leafletmap', mapOptions).setView([23.224043, 72.646284], 15);

    this.leaflet.on('zoomend ', (event) => {
      this.handleViewAutoUpdate();
      console.log("zoom => ",this.leaflet.getZoom());
    });
    this.leaflet.on('moveend', () => {
      //console.log(this.leaflet.getBounds());
    });
  }

  renderDataOnMap() {

  }

  onBtnZoomInClickEventHandler(event) {
    this.leaflet.zoomIn();
  }

  onBtnZoomOutClickEventHandler(event) {
    this.leaflet.zoomOut();
  }

  handleViewAutoUpdate() {
    if (this.activeLayerName === 'automatic') {
      let zoomVal = this.leaflet.getZoom();
      if (zoomVal >= 17) {
        this.leaflet.removeLayer(this.streetViewLayer);
        this.leaflet.addLayer(this.aerialViewLayer);
        this.isViewAutoChanged = true;
      } else if (this.isViewAutoChanged) {
        this.leaflet.removeLayer(this.aerialViewLayer);
        this.leaflet.addLayer(this.streetViewLayer);
      }
    }
  }

  onLayerSelectionChangeEventHandler(layerName) {
    switch (layerName) {
      case 'automatic':
        this.leaflet.removeLayer(this.aerialViewLayer);
        this.leaflet.addLayer(this.streetViewLayer);
        this.activeLayerName = 'automatic';
        this.handleViewAutoUpdate();
        break;
      case 'aerial':
        this.leaflet.removeLayer(this.streetViewLayer);
        this.leaflet.addLayer(this.aerialViewLayer);
        this.activeLayerName = 'aerial';
        break;
      case 'street':
        this.leaflet.removeLayer(this.aerialViewLayer);
        this.leaflet.addLayer(this.streetViewLayer);
        this.activeLayerName = 'street';
        break;
      default:
    }
  }
}
