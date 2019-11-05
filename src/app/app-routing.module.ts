import { TreeViewerComponent } from './tree-viewer/tree-viewer.component';
import { BomSyncComponent } from './bom-sync/bom-sync.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: BomSyncComponent },
  { path: 'tree', component: TreeViewerComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
