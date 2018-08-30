import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DropDownBaseComponent} from '../drop-down.component';
import {FilterTypeConstants, HouseListTypes, ListTypeConstants} from '../filter.constants';

@Component({
  selector: 'app-more-filter',
  templateUrl: './more-filter.component.html',
  styleUrls: ['../filter-menu.component.css', './more-filter.component.css']
})
export class MoreFilterComponent extends DropDownBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  onFilterValueChanged(filterEvent: { filterType: string, filterValue: any }) {
    console.log(filterEvent);
  }
}
