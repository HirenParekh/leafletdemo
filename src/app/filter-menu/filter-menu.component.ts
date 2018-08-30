import {Component} from '@angular/core';

@Component({
  selector: 'app-filter-menu',
  templateUrl: 'filter-menu.component.html',
  styleUrls: ['filter-menu.component.css']
})
export class FilterMenuComponent {

  filterCriteria: any = {};

  constructor() {

  }

  onFilterValueChanged(filterEvent: { filterType: string, filterValue: any }) {
    this.filterCriteria[filterEvent.filterType] = filterEvent.filterValue;
    console.log(this.filterCriteria);
  }
}
