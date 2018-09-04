import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ICommonFilter} from '../common-filter.interface';
import {FilterTypeConstants, HouseListTypes, ListTypeConstants, NoOfBathList} from '../filter.constants';
import {DropDownBaseComponent} from '../drop-down.component';
import {SelectionListComponent} from '../selection-list/selection-list.component';
import {DropDownListBaseComponent} from '../drop-down-list.component';

@Component({
  selector: 'icity-baths-filter',
  templateUrl: './baths-filter.component.html',
  styleUrls: ['../filter-menu.component.css', './baths-filter.component.css']
})
export class BathsFilterComponent extends DropDownListBaseComponent implements OnInit, ICommonFilter {
  filterType: string;
  filterValue: any;
  filterLabel: string = 'Filters';
  listTypeConstants = ListTypeConstants;
  noOfBathList = NoOfBathList;
  selectedItem: any;

  constructor() {
    super();
    this.filterType = FilterTypeConstants.NO_OF_BATHS;
  }

  setValue(value: any) {
    if (!value) {
      return;
    }
    this.filterValue = value;
    this.renderValue();
  }

  @Input()
  set value(value: any) {
    this.setValue(value);
  }

  getValue(): any {
    return this.filterValue;
  }

  @Output()
  valueChanged: EventEmitter<{ filterType: string, filterValue: any }> = new EventEmitter<{ filterType: string, filterValue: any }>();

  //@ViewChild('selectionList') selectionList: SelectionListComponent;

  ngOnInit() {
  }

  renderValue() {
    if (!this.filterValue) {
      return;
    }
    for (let i = 0; i < this.noOfBathList.length; i++) {
      let currItem = this.noOfBathList[i];
      if (currItem.value == this.filterValue) {
        this.selectedItem = currItem;
        break;
      }
    }
    this.setSelection(this.filterValue);
  }

  updateFilterValue() {
    this.filterValue = this.selectedItem.value;
    this.valueChanged.emit({filterType: this.filterType, filterValue: this.filterValue});
  }

  updateFilterLabel() {

  }

  onBathNoSelectionChanged(item) {
    this.selectedItem = item;
    this.updateFilterValue();
    this.isDrdOpen = false;
    console.log(item);
  }
}
