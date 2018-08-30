import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICommonFilter} from '../common-filter.interface';
import {FilterTypeConstants, HouseListTypes, ListTypeConstants, NoOfBathList} from '../filter.constants';
import {DropDownBaseComponent} from '../drop-down.component';

@Component({
  selector: 'icity-baths-filter',
  templateUrl: './baths-filter.component.html',
  styleUrls: ['../filter-menu.component.css', './baths-filter.component.css']
})
export class BathsFilterComponent extends DropDownBaseComponent implements OnInit, ICommonFilter {
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
  valueChanged: EventEmitter<{ filterType: string, filterValue: any }> = new EventEmitter<{ filterType: string, filterValue: any }>();

  ngOnInit() {
  }

  renderValue() {
    if (!this.filterValue) {
      return;
    }
  }

  updateFilterValue() {
    this.filterValue = this.selectedItem.value;
    this.valueChanged.emit({filterType: this.filterType, filterValue: this.filterValue});
  }

  updateFilterLabel() {

  }

  onBathNoSelectionChanged(event, item) {
    this.selectedItem = item;
    this.updateFilterValue();
    console.log(item);
  }
}
