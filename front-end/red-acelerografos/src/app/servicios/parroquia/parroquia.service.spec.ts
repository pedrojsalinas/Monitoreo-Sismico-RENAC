import { TestBed } from '@angular/core/testing';

import { ParroquiaService } from './parroquia.service';

describe('ParroquiaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParroquiaService = TestBed.get(ParroquiaService);
    expect(service).toBeTruthy();
  });
});
