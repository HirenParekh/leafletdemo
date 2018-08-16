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
  }

}
