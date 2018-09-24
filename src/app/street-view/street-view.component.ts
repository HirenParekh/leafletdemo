import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

declare var google: any;


@Component({
  selector: 'app-street-view',
  templateUrl: './street-view.component.html',
  styleUrls: ['./street-view.component.css']
})
export class StreetViewComponent implements OnInit {

  isVisible: boolean = false;
  streetViewService: any;
  panorama: any;
  latLng: { lat: number, lng: number };
  isLoading:boolean = false;
  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  retrieveStreetView() {
    this.streetViewService = new google.maps.StreetViewService();
    setTimeout(() => {
      this.panorama = new google.maps.StreetViewPanorama(document.getElementById('streetView'), {
        addressControl: false,
        addressControlOptions: false,
        clickToGo: false,
        disableDefaultUI: true,
        linksControl: false
      });
      this.streetViewService.getPanorama({location: this.latLng, radius: 50}, (data, status) => {
        this.renderStreetView(data, status);
      });
    }, 0);
  }

  renderStreetView(data, status) {
    this.isLoading = true;
    if (status === google.maps.StreetViewStatus.OK) {
      this.panorama.setPano(data.location.pano);
      this.panorama.setPov({
        heading: 270,
        pitch: 0
      });
      this.panorama.setVisible(true);
    } else {
      console.error('Street View data not found for this location.');
    }
  }

  update(latLng: { lat: number, lng: number }) {
    this.isVisible = true;
    this.latLng = latLng;
    this.retrieveStreetView();
  }
}
