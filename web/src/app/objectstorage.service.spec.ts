import { TestBed } from '@angular/core/testing';

import { ObjectstorageService } from './objectstorage.service';

describe('ObjectstorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObjectstorageService = TestBed.get(ObjectstorageService);
    expect(service).toBeTruthy();
  });
});
