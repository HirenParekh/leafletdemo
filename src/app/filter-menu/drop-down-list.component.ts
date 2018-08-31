import {Component, ElementRef, HostListener, Input, ViewChild} from '@angular/core';
import {DOWN_ARROW, ENTER, SPACE, UP_ARROW} from '@angular/cdk/keycodes';
import {ListKeyboardManager} from './list-keyboard.manager';
import {DropDownBaseComponent} from './drop-down.component';
import * as jQuery from 'jquery';
import {SelectionListItemComponent} from './selection-list/selection-list-item/selection-list-item.component';

@Component({
  selector: 'app-drop-down-base',
  template: ''
})
export class DropDownListBaseComponent extends DropDownBaseComponent {

  activeIndex: number = -1;
  selectedValue: any;
  listItems: any;

  constructor() {
    super();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.listItems = jQuery(this.drdBody.nativeElement).find('.select-list > li');
    if (this.drdHandle) {
      this.drdHandle.nativeElement.addEventListener('keydown', (e) => {
        this.onSelectListKeyPressEvent(e);
      });
      this.drdHandle.nativeElement.addEventListener('blur', (e) => {

      });
    }
  }

  onSelectListKeyPressEvent(event: KeyboardEvent) {
    if (event.keyCode === DOWN_ARROW || event.keyCode === UP_ARROW) {
      if (!this.isDrdOpen) {
        this.isDrdOpen = true;
        if (this.activeIndex === -1) {
          this.activeIndex++;
          let item = this.getListItemByIndex(this.activeIndex);
          jQuery(item).addClass('active');
        }
      } else {
        this.listItems.removeClass('active');
        if (event.keyCode === DOWN_ARROW) {
          this.activeIndex = Math.min(this.activeIndex + 1, this.listItems.length - 1);
          let item = this.getListItemByIndex(this.activeIndex);
          jQuery(item).addClass('active');
        } else if (event.keyCode === UP_ARROW) {
          this.activeIndex = Math.max(this.activeIndex - 1, 0);
          let item = this.getListItemByIndex(this.activeIndex);
          jQuery(item).addClass('active');
        }
      }
    }
    else if (event.keyCode === ENTER || event.keyCode === SPACE) {
      let activeItem = this.getListItemByIndex(this.activeIndex);
      this.selectedValue = jQuery(activeItem).attr('data-value');
      this.listItems.removeClass('selected');
      jQuery(activeItem).addClass('selected');
    }
  }

  getListItemByIndex(index): any {
    let item = null;
    for (let i = 0; this.listItems && i < this.listItems.length; i++) {
      let currItem = this.listItems[i];
      if (index === i) {
        item = currItem;
        break;
      }
    }
    return item;
  }

  setSelection(value) {
    this.selectedValue = value;
    for (let i = 0; this.listItems && i < this.listItems.length; i++) {
      let currItem = this.listItems[i];
      if (value == jQuery(currItem).attr('data-value')) {
        this.activeIndex = i;
        this.listItems.removeClass('selected');
        this.listItems.removeClass('active');
        jQuery(currItem).addClass('selected');
        jQuery(currItem).addClass('active');
        break;
      }
    }
  }
}
