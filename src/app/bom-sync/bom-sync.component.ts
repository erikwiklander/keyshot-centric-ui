import { Component, OnInit } from '@angular/core';
import { Node } from 'ng-material-treetable';
import { SampleBomService } from './../sample-bom.service';

@Component({
  selector: 'app-bom-sync',
  templateUrl: './bom-sync.component.html',
  styleUrls: ['./bom-sync.component.css']
})
export class BomSyncComponent implements OnInit {

  myArray: Node<MyValue>[];

  constructor(private sampleService: SampleBomService) {
    this.myArray = sampleService.getSample();
  }

  ngOnInit() {
  }

}

export interface MyValue {
  name: string;
  kind?: number;
  material?: string;
  ID?: number;
}

export interface KeyshotValue {
  name: string;
  kind: number;
  material: string;
  ID: string;
  children: KeyshotValue[];
}
