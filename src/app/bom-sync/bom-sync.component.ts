import { UrlParserService, ModelSet } from './../url-parser.service';
import { Component, OnInit } from '@angular/core';
import { SampleBomService } from './../sample-bom.service';
import { ActivatedRoute } from '@angular/router';
import * as pako from 'pako';

@Component({
  selector: 'app-bom-sync',
  templateUrl: './bom-sync.component.html',
  styleUrls: ['./bom-sync.component.css']
})
export class BomSyncComponent implements OnInit {

  tabs: string[];
  decodedData: [];

  constructor(private sampleService: SampleBomService, private urlParserService: UrlParserService, private route: ActivatedRoute) {

    const encoded = route.snapshot.queryParamMap.get('q');
    urlParserService.dec(encoded)
      .then((res) => {
        this.decodedData = res;
        this.tabs = urlParserService.getTabs(res);
      }).catch((err) => {
        console.log('ERROR!', err);
      });
  }

  ngOnInit() {
  }

  getItems(name: string): ModelSet[] {
    return this.urlParserService.getComponents(this.decodedData, name);
  }

}
