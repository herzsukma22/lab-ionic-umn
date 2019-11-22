import { TestBed } from '@angular/core/testing';

import { GebetService } from './gebet.service';

describe('GebetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GebetService = TestBed.get(GebetService);
    expect(service).toBeTruthy();
  });
});
