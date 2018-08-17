import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-map-controls',
  templateUrl: 'map-controls.component.html',
  styleUrls: ['map-controls.component.css']
})
export class MapControlsComponent {

  isLayerCtrlActive:boolean = false;

  @Output() btnZoomInClickEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() btnZoomOutClickEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() layerSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() {

  }

  ngAfterViewInit(){
  }

  onBtnZoomInClick(event) {
    this.btnZoomInClickEvent.emit(true);
  }

  onBtnZoomOutClick(event) {
    this.btnZoomOutClickEvent.emit(true);
  }

  onLayerSelectionChanged(event) {
    this.isLayerCtrlActive = false;
    this.layerSelectionChanged.emit(event.target.value);
  }

}
