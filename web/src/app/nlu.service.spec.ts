import { TestBed } from '@angular/core/testing';

import { NluService } from './nlu.service';

describe('NluService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NluService = TestBed.get(NluService);
    expect(service).toBeTruthy();
  });
});
