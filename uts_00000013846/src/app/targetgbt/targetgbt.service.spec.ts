import { TestBed } from '@angular/core/testing';

import { TargetgbtService } from './targetgbt.service';

describe('TargetgbtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TargetgbtService = TestBed.get(TargetgbtService);
    expect(service).toBeTruthy();
  });
});
