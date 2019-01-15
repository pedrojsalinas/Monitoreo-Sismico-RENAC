import { TestBed } from '@angular/core/testing';

import { AcelerografoService } from './acelerografo.service';

describe('AcelerografoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcelerografoService = TestBed.get(AcelerografoService);
    expect(service).toBeTruthy();
  });
});
