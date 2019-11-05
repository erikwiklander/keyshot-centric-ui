import { Component, OnInit } from '@angular/core';
import { SampleBomService } from './../sample-bom.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bom-sync',
  templateUrl: './bom-sync.component.html',
  styleUrls: ['./bom-sync.component.css']
})
export class BomSyncComponent implements OnInit {

  tabs: string[];

  constructor(private sampleService: SampleBomService, private route: ActivatedRoute) {
    this.tabs = sampleService.getTabs();
    console.log('encoded String', route.snapshot.url[1].path);
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
