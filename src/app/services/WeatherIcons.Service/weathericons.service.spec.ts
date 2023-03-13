import { TestBed } from '@angular/core/testing';

import { WeathericonsService } from './weathericons.service';

describe('WeathericonsService', () => {
  let service: WeathericonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeathericonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
