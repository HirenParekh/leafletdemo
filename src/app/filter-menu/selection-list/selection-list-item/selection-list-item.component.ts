import {Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-selection-list-item',
  templateUrl: 'selection-list-item.component.html',
  styleUrls: ['selection-list-item.component.css']
})
export class SelectionListItemComponent {

  private _isActive: boolean;

  @Input()
  set isActive(value: boolean) {
    this._isActive = value;
    if (this._isActive && this.itemRef) {
      this.itemRef.nativeElement.focus();
    } else {
      this.itemRef.nativeElement.blur();
    }
  }

  get isActive(): boolean {
    return this._isActive;
  }

  private _isSelected: boolean;

  @Input()
  set isSelected(value: boolean) {
    this._isSelected = value;
    if (this._isSelected) {
      this.selectionChanged.emit(true);
    }
  }

  get isSelected(): boolean {
    return this._isSelected;
  }

  @ViewChild('itemRef') itemRef: ElementRef;

  @Output()
  selectionChanged: EventEmitter<any> = new EventEmitter<any>();

  constructor() {

  }

  @HostListener('click', ['$event'])
  onHostClicked(event) {
    event.stopPropagation();
  }

  setFocus() {
    /* console.log('set focus 2');
     if (this.itemRef) {
       console.log('set focus 3');
       this.itemRef.nativeElement.focus();
     }*/
  }
}
