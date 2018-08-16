import { Component, OnInit } from '@angular/core';
import {ChildoneComponent} from '../childone/childone.component';
import L from "leaflet";
@Component({
  selector: 'app-childfour',
  templateUrl: './childfour.component.html',
  styleUrls: ['./childfour.component.css']
})
export class ChildfourComponent extends ChildoneComponent implements OnInit {

  constructor() {
    super();
  }

  renderDataOnMap(){
    let states = [{
      "type": "Feature",
      "properties": {"party": "Republican"},
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [ 72.639717, 23.229011],
          [ 72.644623, 23.236793],
          [ 72.651498, 23.233205],
          [ 72.646552, 23.225333],
          [ 72.639717, 23.229011]
        ]]
      }
    }, {
      "type": "Feature",
      "properties": {"party": "Democrat"},
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [72.648052 , 23.212693],
          [72.658520 , 23.229435],
          [72.665473 , 23.225722],
          [72.654925 , 23.208941],
          [72.648052 , 23.212693]
        ]]
      }
    }];

    L.geoJSON(states, {
      style: function(feature) {
        switch (feature.properties.party) {
          case 'Republican': return {color: "#ff0000"};
          case 'Democrat':   return {color: "#0000ff"};
        }
      }
    }).addTo(this.leaflet);
  }

}
