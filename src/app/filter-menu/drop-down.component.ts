import {Component, ElementRef, HostListener, Input, ViewChild} from '@angular/core';
import {DOWN_ARROW, UP_ARROW} from '@angular/cdk/keycodes';
import {ListKeyboardManager} from './list-keyboard.manager';

@Component({
  selector: 'app-drop-down-base',
  template: ''
})
export class DropDownBaseComponent {

  isDrdOpen: boolean;
  @Input()
  isChildDrd: boolean = false;

  constructor() {

  }

  @ViewChild('drdBody') drdBody: ElementRef;
  @ViewChild('drdHandle') drdHandle: ElementRef;

  @HostListener('click', ['$event'])
  onHostClicked(event) {
    if (!this.isChildDrd) {
      event.stopPropagation();
      document.dispatchEvent(new Event('closeOtherChildDrd'));
    }
  }

  ngAfterViewInit() {
    document.addEventListener('click', (event) => {
      this.isDrdOpen = false;
    });
    document.addEventListener('closeOtherDrd', (event) => {
      this.isDrdOpen = false;
    });
    document.addEventListener('closeOtherChildDrd', (event) => {
      if (this.isChildDrd)
        this.isDrdOpen = false;
    });
  }

  onDrdHandleClicked(event) {
    if (this.isDrdOpen) {
      this.isDrdOpen = false;
      return;
    }
    //event.stopPropagation();
    if (this.isChildDrd) {
      document.dispatchEvent(new Event('closeOtherChildDrd'));
    }
    else {
      document.dispatchEvent(new Event('closeOtherDrd'));
    }

    setTimeout(() => {
      this.isDrdOpen = !this.isDrdOpen;
      /*if (this.isDrdOpen)
        this.setDrdMaxHeight();*/
    }, 0);
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
