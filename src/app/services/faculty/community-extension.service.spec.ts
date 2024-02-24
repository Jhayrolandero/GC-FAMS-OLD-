import { TestBed } from '@angular/core/testing';

import { CommunityExtensionService } from './community-extension.service';

describe('CommunityExtensionService', () => {
  let service: CommunityExtensionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunityExtensionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
