import { TestBed } from '@angular/core/testing';

import { UrlParserService } from './url-parser.service';

describe('UrlParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrlParserService = TestBed.get(UrlParserService);
    expect(service).toBeTruthy();
  });
});
