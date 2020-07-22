import {TestBed} from '@angular/core/testing';

import {HostsServiceService} from './hosts-service.service';

describe('HostsServiceService', () => {
    let service: HostsServiceService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(HostsServiceService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
