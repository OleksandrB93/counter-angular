import { TestBed } from '@angular/core/testing';

import { IncrementServiceService } from './increment-service.service';

describe('IncrementServiceService', () => {
  let service: IncrementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncrementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
