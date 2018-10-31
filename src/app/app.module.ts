import {BrowserModule} from '@angular/platform-browser';
import {APP_ID, Inject, NgModule, PLATFORM_ID} from '@angular/core';

import {AppComponent} from './app.component';
import {ParentComponent} from './parent/parent.component';
import {GrandChildoneComponent} from './grand-children/grand-childone/grand-childone.component';
import {GrandChildtwoComponent} from './grand-children/grand-childtwo/grand-childtwo.component';
import {GrandChildthreeComponent} from './grand-children/grand-childthree/grand-childthree.component';
import {GrandChildfourComponent} from './grand-children/grand-childfour/grand-childfour.component';
import {ChildoneComponent} from './children/childone/childone.component';
import {ChildtwoComponent} from './children/childtwo/childtwo.component';
import {ChildthreeComponent} from './children/childthree/childthree.component';
import {ChildfourComponent} from './children/childfour/childfour.component';
import {AppRoutingModule} from './app-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MapControlsComponent} from './map-controls/map-controls.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {FilterMenuModule} from './filter-menu/filter-menu.module';
import {FormsModule} from '@angular/forms';
import {StreetViewComponent} from './street-view/street-view.component';
import {StaticInfoFilterComponent} from './static-info-filter/static-info-filter.component';
import {SchoolsInfoComponent} from './static-info-filter/schools-info/schools-info.component';
import {InfoFilterDropdownComponent} from './static-info-filter/info-filter-dropdown/info-filter-dropdown.component';
import {DailyHealthInfoComponent} from './static-info-filter/daily-health-info/daily-health-info.component';
import {FoodInfoComponent} from './static-info-filter/food-info/food-info.component';
import {LiveWellInfoComponent} from './static-info-filter/live-well-info/live-well-info.component';
import {SecurityInfoComponent} from './static-info-filter/security-info/security-info.component';
import {HazardsInfoComponent} from './static-info-filter/hazards-info/hazards-info.component';
import {PollutionInfoComponent} from './static-info-filter/pollution-info/pollution-info.component';
import {AffordabilityInfoComponent} from './static-info-filter/affordability-info/affordability-info.component';
import {StatsInfoComponent} from './static-info-filter/stats-info/stats-info.component';
import {isPlatformBrowser} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildoneComponent,
    ChildtwoComponent,
    ChildthreeComponent,
    ChildfourComponent,
    GrandChildoneComponent,
    GrandChildtwoComponent,
    GrandChildthreeComponent,
    GrandChildfourComponent,
    MapControlsComponent,
    StreetViewComponent,
    StaticInfoFilterComponent,
    SchoolsInfoComponent,
    InfoFilterDropdownComponent,
    DailyHealthInfoComponent,
    FoodInfoComponent,
    LiveWellInfoComponent,
    SecurityInfoComponent,
    HazardsInfoComponent,
    PollutionInfoComponent,
    AffordabilityInfoComponent,
    StatsInfoComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ngrouter'}),
    BrowserAnimationsModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    FilterMenuModule,
    MatCardModule,
    MatButtonToggleModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(fas);
  }
}
