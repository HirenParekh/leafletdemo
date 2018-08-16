import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ParentComponent} from './parent/parent.component';
import { GrandChildoneComponent } from './grand-children/grand-childone/grand-childone.component';
import { GrandChildtwoComponent } from './grand-children/grand-childtwo/grand-childtwo.component';
import { GrandChildthreeComponent } from './grand-children/grand-childthree/grand-childthree.component';
import { GrandChildfourComponent } from './grand-children/grand-childfour/grand-childfour.component';
import {ChildoneComponent} from './children/childone/childone.component';
import {ChildtwoComponent} from './children/childtwo/childtwo.component';
import {ChildthreeComponent} from './children/childthree/childthree.component';
import {ChildfourComponent} from './children/childfour/childfour.component';
import {AppRoutingModule} from './app-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';

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
    GrandChildfourComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonToggleModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
