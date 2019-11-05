import { SampleBomService } from './sample-bom.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BomSyncComponent } from './bom-sync/bom-sync.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TreetableModule } from 'ng-material-treetable';


@NgModule({
  declarations: [
    AppComponent,
    BomSyncComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TreetableModule,
    MatToolbarModule
  ],
  providers: [SampleBomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
