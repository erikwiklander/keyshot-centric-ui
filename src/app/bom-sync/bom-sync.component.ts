import { Component, OnInit } from '@angular/core';
import { SampleBomService } from './../sample-bom.service';

@Component({
  selector: 'app-bom-sync',
  templateUrl: './bom-sync.component.html',
  styleUrls: ['./bom-sync.component.css']
})
export class BomSyncComponent implements OnInit {

  tabs: string[];

  constructor(private sampleService: SampleBomService) {
    this.tabs = sampleService.getTabs();
  }

  ngOnInit() {
  }

  getItems(name: string): ModelSet[] {
    return this.sampleService.getComponents(name);
  }

}

export interface ModelSet {
  name: string;
  kind?: number;
  material?: string;
  ID?: number;
}
