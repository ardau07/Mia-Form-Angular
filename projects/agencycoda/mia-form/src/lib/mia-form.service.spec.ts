import { TestBed } from '@angular/core/testing';

import { MiaFormService } from './mia-form.service';

describe('MiaFormService', () => {
  let service: MiaFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
