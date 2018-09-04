import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ChildoneComponent} from '../childone/childone.component';
import L from 'leaflet';
import {StreetViewComponent} from '../../street-view/street-view.component';

declare var google: any;

@Component({
  selector: 'app-childthree',
  templateUrl: './childthree.component.html',
  styleUrls: ['./childthree.component.css']
})
export class ChildthreeComponent implements OnInit, AfterViewInit {

  map: any;
  latLng = {lat: 48.805765, lng: 2.169082};
  @ViewChild('streetView') streetView: StreetViewComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Set up the map.
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: this.latLng,
      zoom: 16,
      streetViewControl: false
    });
    this.map.addListener('click', (event) => {
      let marker = new google.maps.Marker({
        position: event.latLng,
        map: this.map
      });
      this.latLng = event.latLng;
      this.streetView.update(event.latLng);
    });
  }

  constructor() {

  }

}
