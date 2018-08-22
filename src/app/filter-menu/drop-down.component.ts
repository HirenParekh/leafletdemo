import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'app-drop-down-base',
  template: ''
})
export class DropDownBaseComponent {

  isDrdOpen: boolean;

  constructor() {

  }

  @ViewChild('drdBody') drdBody: ElementRef;

  @HostListener('click', ['$event'])
  onHostClicked(event) {
    event.stopPropagation();
  }

  ngAfterViewInit() {
    document.addEventListener('click', (event) => {
      this.isDrdOpen = false;
    });
  }

  onDrdHandleClicked(event) {
    event.stopPropagation();
    this.isDrdOpen = !this.isDrdOpen;
    if (this.isDrdOpen)
      this.setDrdMaxHeight();
  }

  onDrdOpen() {

  }

  setDrdMaxHeight() {
    setTimeout(() => {
      if (this.drdBody) {
        this.drdBody.nativeElement.style.maxHeight = 'calc(100vh - ' + this.drdBody.nativeElement.getBoundingClientRect().top + 'px - 20px)';
        this.onDrdOpen();
      }
    }, 0);
  }

}
