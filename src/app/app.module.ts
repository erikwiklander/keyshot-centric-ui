import { SampleBomService } from './sample-bom.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BomSyncComponent } from './bom-sync/bom-sync.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TreetableModule } from 'ng-material-treetable';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { TreeViewerComponent } from './tree-viewer/tree-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    BomSyncComponent,
    TreeViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TreetableModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule
  ],
  providers: [SampleBomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
