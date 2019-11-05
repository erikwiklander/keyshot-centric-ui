import { TestBed } from '@angular/core/testing';

import { SampleBomService } from './sample-bom.service';

describe('SampleBomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleBomService = TestBed.get(SampleBomService);
    expect(service).toBeTruthy();
  });
});
