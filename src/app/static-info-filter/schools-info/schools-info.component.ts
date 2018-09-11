import {Component, OnInit} from '@angular/core';
import {ICommonFilter} from '../../filter-menu/common-filter.interface';
import {StaticInfoFilterConstants} from '../../app.constants';

@Component({
  selector: 'app-schools-info',
  templateUrl: './schools-info.component.html',
  styleUrls: ['./schools-info.component.css']
})
export class SchoolsInfoComponent implements OnInit, ICommonFilter {
  filterType: string;

  setValue(value: any) {
  }

  getValue(): any {
    return undefined;
  }

  constructor() {
    this.filterType = StaticInfoFilterConstants.SCHOOLS.key;
  }

  ngOnInit() {
  }

}
