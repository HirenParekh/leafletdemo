import {Component, OnInit} from '@angular/core';
import {StaticInfoFilterConstants} from '../app.constants';

@Component({
  selector: 'app-static-info-filter',
  templateUrl: './static-info-filter.component.html',
  styleUrls: ['../../assets/scss/static-info-filter.css', './static-info-filter.component.css']
})
export class StaticInfoFilterComponent implements OnInit {

  staticInfoFilterConstant = StaticInfoFilterConstants;
  selectedFilter: string = '';

  constructor() {
  }

  ngOnInit() {
  }

  onFilterBtnClick(filterObj: any) {
    this.selectedFilter = filterObj.key;
  }

}
