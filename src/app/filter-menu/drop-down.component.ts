import {Component, HostListener} from '@angular/core';

@Component({
  selector:'app-drop-down-base',
  template:''
})
export class DropDownBaseComponent{

  isDrdOpen: boolean;

  constructor(){

  }

  @HostListener('click',['$event'])
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
  }

}
