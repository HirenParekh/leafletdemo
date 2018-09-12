import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {StaticInfoFilterConstants} from '../../app.constants';
import {DropDownBaseComponent} from '../../filter-menu/drop-down.component';

@Component({
  selector: 'app-stats-info',
  templateUrl: './stats-info.component.html',
  styleUrls: ['../../../assets/scss/static-info-filter.css', './stats-info.component.css']
})
export class StatsInfoComponent implements OnInit {

  filterType: string;

  filter = StaticInfoFilterConstants.STATS;
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
