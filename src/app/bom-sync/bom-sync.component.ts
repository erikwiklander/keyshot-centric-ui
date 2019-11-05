import { Component, OnInit } from '@angular/core';
import { Node } from 'ng-material-treetable';
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
    //    console.log('WOW!', sampleService.getTabs());
  }

  ngOnInit() {
  }

}
