import {Injectable} from '@angular/core';
import {HostModel} from './host.model';

@Injectable({
    providedIn: 'root'
})
export class HostsService {

    private hosts: HostModel[] = [
        {
            id: 1,
            name: 'GoBlender',
            problem: 1,
            warning: 1,
        },
        {
            id: 2,
            name: 'Wheels & Deals',
            problem: 0,
            warning: 0,
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
