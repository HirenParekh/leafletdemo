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

  renderDataOnMap() {

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
      iconSize: [16, 16],
      iconAnchor: [8, 8],
      popupAnchor: [0, -8]
    });
    this.coordinates.forEach(point => {
      let currMarker = L.marker(point,{icon:divIcon}).addTo(this.leaflet);
      let timer;
      currMarker.bindPopup(this.getPopupContent('Hiren'));
      currMarker.on('mouseover',() => {
        timer = setTimeout(() => {
          currMarker.openPopup();
        },350);

      });
      currMarker.on('mouseout',() => {
        timer ? clearTimeout(timer): '';
        currMarker.closePopup();
      });
    })
  }

  getPopupContent(userName: string): string {
    let content = '';
    content = `<div class="popup-wrapper">
      <div class="popup-title">Hello ${userName}</div>
        <div class="popup-content">
          <div class="info-item">
            <div class="item-title">Email: </div>
            <div class="item-text">Hiren@gmail.com</div>
          </div>  
          <div class="info-item">
            <div class="item-title">Mobile: </div>
            <div class="item-text">9712046538</div>
          </div>
          <div class="info-item">
            <div class="item-title">Works at: </div>
            <div class="item-text">Infibeam</div>
          </div>  
        </div>
    </div>`;
    return content;
  }

}
