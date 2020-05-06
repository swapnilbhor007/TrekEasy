import { TestBed, async, inject } from '@angular/core/testing';

import { IdentifierGuard } from './identifier.guard';

describe('IdentifierGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdentifierGuard]
    });
  });

  it('should ...', inject([IdentifierGuard], (guard: IdentifierGuard) => {
    expect(guard).toBeTruthy();
  }));
});
