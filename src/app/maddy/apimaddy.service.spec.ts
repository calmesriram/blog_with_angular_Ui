import { TestBed } from '@angular/core/testing';

import { ApimaddyService } from './apimaddy.service';

describe('ApimaddyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApimaddyService = TestBed.get(ApimaddyService);
    expect(service).toBeTruthy();
  });
});
