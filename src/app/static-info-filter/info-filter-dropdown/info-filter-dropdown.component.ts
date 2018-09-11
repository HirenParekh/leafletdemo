import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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

  @Output() selectionChanged: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {

  }

}
