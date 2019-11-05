import { UrlParserService } from './url-parser.service';
import { SampleBomService } from './sample-bom.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeViewerComponent } from './tree-viewer/tree-viewer.component';
import { BomSyncComponent } from './bom-sync/bom-sync.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TreetableModule } from 'ng-material-treetable';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';


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
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [SampleBomService, UrlParserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
