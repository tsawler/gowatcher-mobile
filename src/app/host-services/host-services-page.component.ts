import {Component} from '@angular/core';
import {HostServiceModel} from './host-service.model';
import {HostServicesService} from './host-services.service';

@Component({
    selector: 'host-services-component',
    templateUrl: 'host-services-page.component.html',
    styleUrls: ['host-services-page.component.scss']
})
export class HostServicesPage {

    services: HostServiceModel[];

    constructor(private hostServicesService: HostServicesService) {
    }

    ionViewWillEnter() {
        this.services = this.hostServicesService.getAllServices();
    }
}
