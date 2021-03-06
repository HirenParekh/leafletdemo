import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ICommonFilter} from '../../filter-menu/common-filter.interface';
import {StaticInfoFilterConstants} from '../../app.constants';
import {DropDownBaseComponent} from '../../filter-menu/drop-down.component';

@Component({
  selector: 'app-schools-info',
  templateUrl: './schools-info.component.html',
  styleUrls: ['../../../assets/scss/static-info-filter.css', './schools-info.component.css']
})
export class SchoolsInfoComponent implements OnInit, ICommonFilter {
  filterType: string;

  filter = StaticInfoFilterConstants.SCHOOLS;
  filterValue: any;
  @Output() closeFilterEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('drdRef') drdRef: DropDownBaseComponent;

  setValue(value: any) {
  }

  getValue(): any {
    return undefined;
  }

  constructor() {
    this.filterType = this.filter.key;
    this.filterValue = this.filter.options[0];
  }

  ngOnInit() {
  }

  onFilterOptionChanged(option) {
    this.filterValue = option;
  }

  onFilterCloseBtnClick() {
    this.closeFilterEvent.emit(true);
  }

  openDropdown() {
    this.drdRef.onDrdHandleClicked(null);
  }
}
