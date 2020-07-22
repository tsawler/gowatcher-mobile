import {Injectable} from '@angular/core';
import {HostModel} from './host.model';

@Injectable({
    providedIn: 'root'
})
export class HostsServiceService {

    private hosts: HostModel[] = [
        {
            id: '1',
            name: 'GoBlender',
        },
        {
            id: '2',
            name: 'Wheels & Deals',
        }
    ];

    constructor() {
    }

    getAllHosts() {
        return [...this.hosts];
    }
}
