import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {ParentComponent} from './parent/parent.component';
import {ChildoneComponent} from './children/childone/childone.component';
import {ChildtwoComponent} from './children/childtwo/childtwo.component';
import {ChildthreeComponent} from './children/childthree/childthree.component';
import {ChildfourComponent} from './children/childfour/childfour.component';
import {GrandChildoneComponent} from './grand-children/grand-childone/grand-childone.component';
import {GrandChildtwoComponent} from './grand-children/grand-childtwo/grand-childtwo.component';
import {GrandChildthreeComponent} from './grand-children/grand-childthree/grand-childthree.component';
import {GrandChildfourComponent} from './grand-children/grand-childfour/grand-childfour.component';

const routes: Routes = [
  {path: '', redirectTo: 'leaflet', pathMatch: 'full'},
  {
    path: 'leaflet',
    component: ParentComponent,
    data : {title:'Leaflet Map'},
    children: [
      {
        path: '',
        component: ChildoneComponent,
        data : {title:'Leaflet Map'},
        children: [
          {
            path: 'grandchild1',
            component: GrandChildoneComponent
          }
        ]
      },
      {
        path: 'markers',
        component: ChildtwoComponent,
        data : {title:'Leaflet Map | Markers'},
        children: [
          {
            path: 'grandchild2',
            component: GrandChildtwoComponent
          }
        ]
      },
      {
        path: 'polygon',
        component: ChildthreeComponent,
        data : {title:'Leaflet Map | Polygons'},
        children: [
          {
            path: 'grandchild3',
            component: GrandChildthreeComponent
          }
        ]
      },
      {
        path: 'geojson',
        component: ChildfourComponent,
        data : {title:'Leaflet Map | GeoJSON'},
        children: [
          {
            path: 'grandchild4',
            component: GrandChildfourComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
  constructor() {

  }
}
