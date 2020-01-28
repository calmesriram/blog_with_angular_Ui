import { TestBed, async, inject } from '@angular/core/testing';

import { Login1Guard } from './login1.guard';

describe('Login1Guard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Login1Guard]
    });
  });

  it('should ...', inject([Login1Guard], (guard: Login1Guard) => {
    expect(guard).toBeTruthy();
  }));
});
