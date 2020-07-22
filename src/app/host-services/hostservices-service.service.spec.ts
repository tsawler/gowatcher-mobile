import { TestBed } from '@angular/core/testing';

import { HostServicesServiceService } from './host-services-service.service';

describe('HostservicesServiceService', () => {
  let service: HostServicesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HostServicesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
