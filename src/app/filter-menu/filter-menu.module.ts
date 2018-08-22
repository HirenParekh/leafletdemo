import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterMenuComponent} from './filter-menu.component';
import {ListTypeFilterComponent} from './list-type-filter/list-type-filter.component';
import {DropDownBaseComponent} from './drop-down.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FilterMenuComponent,
    ListTypeFilterComponent,
    DropDownBaseComponent
  ],
  exports:[
    FilterMenuComponent
  ]
})
export class FilterMenuModule {
}
