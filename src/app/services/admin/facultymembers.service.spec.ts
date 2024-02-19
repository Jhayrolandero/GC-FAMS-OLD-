import { TestBed } from '@angular/core/testing';

import { FacultymembersService } from './facultymembers.service';

describe('FacultymembersService', () => {
  let service: FacultymembersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacultymembersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
