import {Component, HostListener} from '@angular/core';
import {ICommonFilter} from '../common-filter.interface';
import {FilterTypeConstants} from '../filter-type.constants';
import {DropDownBaseComponent} from '../drop-down.component';

@Component({
  selector: 'app-list-type-filter',
  templateUrl: 'list-type-filter.component.html',
  styleUrls: ['../filter-menu.component.css', 'list-type-filter.component.css']
})
export class ListTypeFilterComponent extends DropDownBaseComponent implements ICommonFilter {
  filterType: string;


  constructor() {
    super();
    this.filterType = FilterTypeConstants.LISTING_TYPES;
  }

  setValue() {
  }

  getValue() {
  }

}
