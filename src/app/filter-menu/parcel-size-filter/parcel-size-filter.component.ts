import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICommonFilter} from '../common-filter.interface';
import {FilterTypeConstants, ListTypeConstants, NoOfBathList} from '../filter.constants';

@Component({
  selector: 'icity-parcel-size-filter',
  templateUrl: './parcel-size-filter.component.html',
  styleUrls: ['../filter-menu.component.css', './parcel-size-filter.component.css']
})
export class ParcelSizeFilterComponent implements OnInit, ICommonFilter {
  filterType: string;
  filterValue: any;
  filterLabel: string = 'Square Feet';
  listTypeConstants = ListTypeConstants;
  noOfBaths = NoOfBathList;

  minValue: any;
  maxValue: any;

  constructor() {
    this.filterType = FilterTypeConstants.SQUARE_FEET_RANGE;
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
    this.filterValue = {min: this.minValue, max: this.maxValue};
    this.valueChanged.emit({filterType: this.filterType, filterValue: this.filterValue});
  }

  updateFilterLabel() {

  }

  onInputValChanged(event) {
    if (isNaN(this.minValue)) {
      this.minValue = '';
    }
    if (isNaN(this.maxValue)) {
      this.maxValue = '';
    }
    if (this.minValue || this.maxValue) {
      this.updateFilterValue();
    }
  }
}
