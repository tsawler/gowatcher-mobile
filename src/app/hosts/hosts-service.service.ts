import {Injectable} from '@angular/core';
import {HostModel} from './host.model';

@Injectable({
    providedIn: 'root'
})
export class HostsServiceService {

    private hosts: HostModel[] = [
        {
            id: 1,
            name: 'GoBlender',
        },
        {
            id: 2,
            name: 'Wheels & Deals',
        }
    ];

    constructor() {
    }

    getAllHosts() {
        return [...this.hosts];
    }

    getHost(id: string) {
        console.log('searching for id', id);
        return {...this.hosts.find(h => h.id === +id)};
    }
}
