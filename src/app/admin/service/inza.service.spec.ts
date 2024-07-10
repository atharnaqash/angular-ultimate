import { TestBed } from '@angular/core/testing';

import { InzaService } from './inza.service';

describe('InzaServiceService', () => {
  let service: InzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
