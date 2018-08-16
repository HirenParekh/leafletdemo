import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ChildoneComponent} from '../childone/childone.component';
import L from 'leaflet';

@Component({
  selector: 'app-childthree',
  templateUrl: './childthree.component.html',
  styleUrls: ['./childthree.component.css']
})
export class ChildthreeComponent extends ChildoneComponent implements OnInit,AfterViewInit {

  constructor() {
    super();
  }

  renderDataOnMap(){
    let polygone = L.polygon([
      [23.229012, 72.637003],
      [23.230057, 72.637743],
      [23.222742, 72.651495],
      [23.224087, 72.652336],
      [23.222953, 72.654369],
      [23.219244, 72.652025],
      [23.220268, 72.649985],
      [23.221677, 72.650858]
    ]).addTo(this.leaflet);
  }
}
