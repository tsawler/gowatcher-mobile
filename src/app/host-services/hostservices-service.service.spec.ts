import {TestBed} from '@angular/core/testing';

import {HostServicesService} from './host-services.service';

describe('HostservicesServiceService', () => {
    let service: HostServicesService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(HostServicesService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
