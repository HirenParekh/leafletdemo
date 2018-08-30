import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterMenuComponent} from './filter-menu.component';
import {ListTypeFilterComponent} from './list-type-filter/list-type-filter.component';
import {DropDownBaseComponent} from './drop-down.component';
import {FormsModule} from '@angular/forms';
import {MoreFilterComponent} from './more-filter/more-filter.component';
import { BathsFilterComponent } from './baths-filter/baths-filter.component';
import { LotSizeFilterComponent } from './lot-size-filter/lot-size-filter.component';
import {SelectionListItemComponent} from './selection-list/selection-list-item/selection-list-item.component';
import {SelectionListComponent} from './selection-list/selection-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FilterMenuComponent,
    ListTypeFilterComponent,
    MoreFilterComponent,
    DropDownBaseComponent,
    BathsFilterComponent,
    LotSizeFilterComponent,
    SelectionListItemComponent,
    SelectionListComponent
  ],
  exports: [
    FilterMenuComponent
  ]
})
export class FilterMenuModule {
}
