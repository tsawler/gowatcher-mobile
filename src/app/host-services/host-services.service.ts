import {Injectable} from '@angular/core';
import {HostServiceModel} from './host-service.model';

@Injectable({
    providedIn: 'root'
})
export class HostServicesService {

    private services: HostServiceModel[] = [
        {
            id: '1',
            hostID: '1',
            serviceID: '1',
            serviceName: 'https',
            hostName: 'GoBlender',
            icon: 'link',
            problem: 0,
            warning: 1,
        },
        {
            id: '2',
            hostID: '1',
            serviceID: '2',
            serviceName: 'postgres',
            hostName: 'GoBlender',
            icon: 'server',
            problem: 1,
            warning: 0,
        },
        {
            id: '3',
            hostID: '1',
            serviceID: '2',
            serviceName: 'redis',
            hostName: 'GoBlender',
            icon: 'server',
            problem: 0,
            warning: 0,
        },
        {
            id: '4',
            hostID: '2',
            serviceID: '2',
            serviceName: 'redis',
            hostName: 'Wheels & Deals',
            icon: 'server',
            problem: 0,
            warning: 0,
        },
        {
            id: '5',
            hostID: '2',
            serviceID: '2',
            serviceName: 'redis',
            hostName: 'Wheels & Deals',
            icon: 'server',
            problem: 0,
            warning: 0,
        },
    ];

    constructor() {
    }

    getAllServices() {
        return [...this.services];
    }
}
