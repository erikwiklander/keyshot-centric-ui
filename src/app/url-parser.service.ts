import { Injectable } from '@angular/core';
import * as pako from 'pako';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UrlParserService {

  constructor() { }

  dec(encodedParam: string): Promise<[]> {
    return new Promise((resolve, reject) => {
      try {
        const end = encodedParam.replace(/ /g, '+');
        const decoded = atob(end);
        const charData = Uint8Array.from(decoded, c => c.charCodeAt(0));
        const inflated = pako.inflate(charData);
        const stringData = String.fromCharCode.apply(null, new Uint16Array(inflated));
        resolve(JSON.parse(stringData));
      } catch (error) {
        reject(error);
      }
    });
  }

  getTabs(decodedData) {
    return _.map(decodedData, 'value.name');
  }

  getComponents(decodedData, name: string) {
    const comp = _.find(decodedData, ['value.name', name]);
    return _.map(_.get(comp, 'children[0].children'), 'value');
  }

}




export interface ModelSet {
  name: string;
  kind?: number;
  material?: string;
  ID?: number;
}
