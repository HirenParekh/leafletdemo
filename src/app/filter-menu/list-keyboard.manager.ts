import {HostListener} from '@angular/core';
import {DOWN_ARROW, UP_ARROW} from '@angular/cdk/keycodes';

export class ListKeyboardManager {

  activeIndex: number = -1;
  numOfItems: number;
  listItems: any;

  constructor() {

  }

  init(items: any) {
    if (items && items.length)
      this.listItems = items;
    this.numOfItems = this.listItems.length;
  }

  setActiveItem() {
    if (this.activeIndex >= this.numOfItems) {
      this.activeIndex = 0;
    } else if (this.activeIndex <= -1) {
      this.activeIndex = this.numOfItems - 1;
    }
    this.listItems.item(this.activeIndex).classList.add('active');
  }

  @HostListener('keydown', ['$event'])
  onSelectListKeyPressEvent(event: KeyboardEvent) {
    if (event.keyCode === DOWN_ARROW) {
      this.activeIndex > -1 ? this.listItems.item(this.activeIndex).classList.remove('active') : '';
      this.activeIndex++;
      this.setActiveItem();
    } else if (event.keyCode === UP_ARROW) {
      this.activeIndex > -1 ? this.listItems.item(this.activeIndex).classList.remove('active') : '';
      this.activeIndex--;
      this.setActiveItem();
    }
  }

}
