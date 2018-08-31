import {Component, ContentChildren, HostListener, QueryList} from '@angular/core';
import {SelectionListItemComponent} from './selection-list-item/selection-list-item.component';
import {ListKeyboardManager} from '../list-keyboard.manager';
import {DOWN_ARROW, TAB, UP_ARROW} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-selection-list',
  templateUrl: 'selection-list.component.html',
  styleUrls: ['selection-list.component.css']
})
export class SelectionListComponent {

  @ContentChildren(SelectionListItemComponent) listItems: QueryList<SelectionListItemComponent>;

  activeIndex: number = -1;

  constructor() {

  }

  ngAfterViewInit() {

  }

  @HostListener('keydown', ['$event'])
  onSelectListKeyPressEvent(event: KeyboardEvent) {
    if (event.keyCode === DOWN_ARROW) {
      this.setActiveItem(false);
      this.activeIndex++;
      this.setActiveItem(true);
    } else if (event.keyCode === UP_ARROW) {
      this.setActiveItem(false);
      this.activeIndex--;
      this.setActiveItem(true);
    }
  }

  setActiveItem(flag = true) {
    if (this.activeIndex >= this.listItems.length) {
      this.activeIndex = 0;
    } else if (this.activeIndex <= -1) {
      this.activeIndex = this.listItems.length - 1;
    }
    this.getListItemByIndex(this.activeIndex).isActive = flag;
  }

  getListItemByIndex(index): SelectionListItemComponent {
    let item = null;
    this.listItems.forEach((val, i) => {
      if (index === i) {
        item = val;
      }
    });
    return item;
  }

  setFocus() {
    console.log('set focus 1');
    this.listItems.forEach(val => {
      if (val.isSelected) {
        val.setFocus();
      }
    });
  }


}
