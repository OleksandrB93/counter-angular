import { TestBed } from '@angular/core/testing';

import { DecrementServiceService } from './decrement-service.service';

describe('DecrementServiceService', () => {
  let service: DecrementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecrementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
