import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ChildoneComponent} from '../childone/childone.component';
import L from 'leaflet';

@Component({
  selector: 'app-childtwo',
  templateUrl: './childtwo.component.html',
  styleUrls: ['./childtwo.component.css']
})
export class ChildtwoComponent extends ChildoneComponent implements OnInit, AfterViewInit {

  constructor() {
    super();
  }

  renderDataOnMap() {
    let marker1 = L.marker([23.224043, 72.656284]).addTo(this.leaflet);
    let marker2 = L.marker([23.214043, 72.646284]).addTo(this.leaflet);
    let marker3 = L.marker([23.229204, 72.636284]).addTo(this.leaflet);

    let icon1 = L.icon({
      iconUrl: '/assets/images/pin2.png',
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -20]
    });
    let icon2 = L.icon({
      iconUrl: '/assets/images/pin3.png',
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -20]
    });
    let divIcon = L.divIcon({
      className: 'div-icon-marker',
      iconSize: [20, 20],
      iconAnchor: [10, 10],
      popupAnchor: [0, -10]
    });
    L.marker([23.219204, 72.626284], {icon: divIcon}).addTo(this.leaflet).bindPopup('Smile :)');
    L.marker([23.225204, 72.644284], {icon: divIcon}).addTo(this.leaflet).bindPopup('Snake');
    L.marker([23.222204, 72.644284], {icon: divIcon}).addTo(this.leaflet).bindPopup('Snake');
    L.marker([23.222204, 72.639284], {icon: divIcon}).addTo(this.leaflet).bindPopup('Snake');
    L.marker([23.220204, 72.639284], {icon: divIcon}).addTo(this.leaflet).bindPopup('Snake');
    L.marker([23.226504, 72.64084], {icon: divIcon}).addTo(this.leaflet).bindPopup('Snake');
    L.marker([23.216504, 72.63084], {icon: divIcon}).addTo(this.leaflet).bindPopup('html pin');
  }

}
