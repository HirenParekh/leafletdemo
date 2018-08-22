import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {ICommonFilter} from '../common-filter.interface';
import {FilterTypeConstants, HouseListTypes, ListTypeConstants} from '../filter.constants';
import {DropDownBaseComponent} from '../drop-down.component';
import {main} from '@angular/compiler-cli/src/main';

@Component({
  selector: 'app-list-type-filter',
  templateUrl: 'list-type-filter.component.html',
  styleUrls: ['../filter-menu.component.css', 'list-type-filter.component.css']
})
export class ListTypeFilterComponent extends DropDownBaseComponent implements ICommonFilter {

  filterType: string;
  filterValue: string[];
  filterLabel: string = 'Listing Type';
  houseListTypes = HouseListTypes;
  listTypeConstants = ListTypeConstants;

  constructor() {
    super();
    this.filterType = FilterTypeConstants.LISTING_TYPES;
  }

  @Input()
  setValue(value: any) {
    if (!value) {
      return;
    }
    this.filterValue = value;
    this.renderValue();
  }

  getValue(): any {
    return this.filterValue;
  }

  @Output()
  valueChanged: EventEmitter<any> = new EventEmitter<any>();

  renderValue() {
    if (!this.filterValue) {
      return;
    }
  }

  updateFilterValue() {
    let value = [];
    for (let i = 0; this.houseListTypes && i < this.houseListTypes.length; i++) {
      let currType = this.houseListTypes[i];
      for (let j = 0; currType.subTypes && j < currType.subTypes.length; j++) {
        let currSubType = currType.subTypes[j];
        if (currSubType['isSelected']) {
          value.push(currSubType.value);
        }
      }
    }
    this.valueChanged.emit(value);
    this.filterValue = value;
    return value;
  }

  onMainCheckboxChange(mainType) {
    mainType.type['isSelected'] = !mainType.type['isSelected'];
    mainType.subTypes.forEach(val => {
      val['isSelected'] = mainType.type['isSelected'];
    });
    this.updateFilterLabel();
    this.updateFilterValue();
  }

  onSubTypeChanged(subType) {
    subType['isSelected'] = !subType['isSelected'];
    let mainType = this.getMainTypeByValue(subType.parent);
    if (subType['isSelected']) {
      mainType.type['isSelected'] = true;
    }
    else if (this.isAllSubTypeUnchecked(mainType)) {
      mainType.type['isSelected'] = false;
    }
    this.updateFilterLabel();
    this.updateFilterValue();
  }

  getMainTypeByValue(mainTypeValue): any {
    for (let i = 0; this.houseListTypes && i < this.houseListTypes.length; i++) {
      let currType = this.houseListTypes[i];
      if (mainTypeValue === currType.type.value) {
        return currType;
      }
    }
    return null;
  }

  isAllSubTypeUnchecked(mainType): boolean {
    let isAllUnchecked = true;
    for (let j = 0; mainType.subTypes && j < mainType.subTypes.length; j++) {
      let currSubType = mainType.subTypes[j];
      if (currSubType['isSelected']) {
        isAllUnchecked = false;
        break;
      }
    }
    return isAllUnchecked;
  }

  updateFilterLabel() {
    let selectedTypes = 0;
    this.filterLabel = 'Listing Type';
    for (let i = 0; this.houseListTypes && i < this.houseListTypes.length; i++) {
      if (this.houseListTypes[i].type['isSelected']) {
        selectedTypes++;
        if (selectedTypes == 1) {
          this.filterLabel = this.houseListTypes[i].type.label;
        } else {
          this.filterLabel = 'Listing Type';
        }
      }
    }
  }
}
