import { Component, OnInit } from '@angular/core';
import { Node, Options } from 'ng-material-treetable';
import { SampleBomService } from './../sample-bom.service';

@Component({
  selector: 'app-tree-viewer',
  templateUrl: './tree-viewer.component.html',
  styleUrls: ['./tree-viewer.component.css']
})
export class TreeViewerComponent implements OnInit {

  modelSets: Node<ModelSet>[];

  opts: Options<ModelSet> = {
    customColumnOrder: ['name', 'material', 'ID', 'kind']
  };

  constructor(private sampleService: SampleBomService) {
    this.modelSets = sampleService.getSample();
  }

  ngOnInit() {
  }

}

export interface ModelSet {
  name: string;
  kind?: number;
  material?: string;
  ID?: number;
}
