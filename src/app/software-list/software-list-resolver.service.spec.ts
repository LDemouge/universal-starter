import { TestBed, inject } from '@angular/core/testing';

import { SoftwareListResolverService } from './software-list-resolver.service';

describe('SoftwareListResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SoftwareListResolverService]
    });
  });

  it('should be created', inject([SoftwareListResolverService], (service: SoftwareListResolverService) => {
    expect(service).toBeTruthy();
  }));
});
