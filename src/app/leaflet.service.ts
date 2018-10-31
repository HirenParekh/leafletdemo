import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

declare var require: any;

@Injectable({
  providedIn: 'root'
})
export class LeafletService {
  L: any;
  constructor(@Inject(PLATFORM_ID) private  platformId: Object) {
    if (isPlatformBrowser(platformId)) {
      this.L = require('leaflet');
    }
  }
}
