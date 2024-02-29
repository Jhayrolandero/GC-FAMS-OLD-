import { TestBed } from '@angular/core/testing';

import { ScheduleFacultyFetcherService } from './schedule-faculty-fetcher.service';

describe('ScheduleFacultyFetcherService', () => {
  let service: ScheduleFacultyFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleFacultyFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
