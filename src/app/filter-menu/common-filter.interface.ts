import {Input} from '@angular/core';

export interface ICommonFilter {
  filterType: string;

  setValue(value:any);

  getValue():any;

}
