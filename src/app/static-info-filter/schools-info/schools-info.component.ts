import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ICommonFilter} from '../../filter-menu/common-filter.interface';
import {StaticInfoFilterConstants} from '../../app.constants';

@Component({
  selector: 'app-schools-info',
  templateUrl: './schools-info.component.html',
  styleUrls: ['../../../assets/scss/static-info-filter.css', './schools-info.component.css']
})
export class SchoolsInfoComponent implements OnInit, ICommonFilter {
  filterType: string;

  filter = StaticInfoFilterConstants.SCHOOLS;

  @Output() closeFilterEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  setValue(value: any) {
  }

  getValue(): any {
    return undefined;
  }

  constructor() {
    this.filterType = this.filter.key;
  }

  ngOnInit() {
  }

  onFilterOptionChanged(option) {
    console.log(option);
  }

  onFilterCloseBtnClick() {
    this.closeFilterEvent.emit(true);
  }

}
