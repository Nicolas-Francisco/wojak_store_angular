import { TestBed } from '@angular/core/testing';

import { WojaksService } from './wojaks.service';

describe('WojaksService', () => {
  let service: WojaksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WojaksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
