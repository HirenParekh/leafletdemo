import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DropDownBaseComponent} from '../../filter-menu/drop-down.component';

@Component({
  selector: 'app-info-filter-dropdown',
  templateUrl: './info-filter-dropdown.component.html',
  styleUrls: ['./info-filter-dropdown.component.css']
})
export class InfoFilterDropdownComponent extends DropDownBaseComponent implements OnInit {

  constructor() {
    super();
  }

  @Input() options: any[];
  @Output() selectionChanged: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {

  }

  onOptionSelect(option) {
    this.isDrdOpen = false;
    this.selectionChanged.emit(option);
  }
}
