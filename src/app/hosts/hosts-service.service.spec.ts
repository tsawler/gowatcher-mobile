import {TestBed} from '@angular/core/testing';

import {HostsService} from './hosts.service';

describe('HostsServiceService', () => {
    let service: HostsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(HostsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
