import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {ChildoneComponent} from '../childone/childone.component';
import {LeafletService} from '../../leaflet.service';

@Component({
  selector: 'app-childfour',
  templateUrl: './childfour.component.html',
  styleUrls: ['./childfour.component.css']
})
export class ChildfourComponent extends ChildoneComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) protected platformId,protected ls:LeafletService) {
    super(platformId,ls);
  }

  renderDataOnMap() {
    let states = [{
      type: 'Feature',
      properties: {'party': 'Republican', 'popupData': 'Sector - 16'},
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [72.639717, 23.229011],
          [72.644623, 23.236793],
          [72.651498, 23.233205],
          [72.646552, 23.225333],
          [72.639717, 23.229011]
        ]]
      }
    }, {
      type: 'Feature',
      properties: {'party': 'Democrat', 'popupData': 'Sector - 10'},
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [72.648052, 23.212693],
          [72.658520, 23.229435],
          [72.665473, 23.225722],
          [72.654925, 23.208941],
          [72.648052, 23.212693]
        ]]
      }
    }];

    let geoJSONLayer = this.ls.L.geoJSON(states, {
      style: function (feature) {
        switch (feature.properties.party) {
          case 'Republican':
            return {color: '#ff0000', 'weight': '1'};
          case 'Democrat':
            return {color: '#0000ff', 'weight': '1'};
        }
      },
      onEachFeature: (feature, layer) => {
        layer.bindTooltip(feature.properties.popupData);
        layer.bindPopup(feature.properties.popupData);
      }
    });
    geoJSONLayer.addTo(this.leaflet);
    let overlayMaps = {
      'Sectors': geoJSONLayer
    };
    this.ls.L.control.layers('', overlayMaps, {collapsed: false}).addTo(this.leaflet);
  }

}
