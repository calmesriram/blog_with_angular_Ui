import { TestBed, async, inject } from '@angular/core/testing';

import { Login2Guard } from './login2.guard';

describe('Login2Guard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Login2Guard]
    });
  });

  it('should ...', inject([Login2Guard], (guard: Login2Guard) => {
    expect(guard).toBeTruthy();
  }));
});
