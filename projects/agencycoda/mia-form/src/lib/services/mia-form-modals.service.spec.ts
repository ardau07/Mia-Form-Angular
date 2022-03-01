import { TestBed } from '@angular/core/testing';

import { MiaFormModalsService } from './mia-form-modals.service';

describe('MiaFormModalsService', () => {
  let service: MiaFormModalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaFormModalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
