import {Component} from '@angular/core';
import {HostServiceModel} from './host-service.model';
import {HostServicesServiceService} from './host-services-service.service';

@Component({
    selector: 'app-tab3',
    templateUrl: 'host-services-page.component.html',
    styleUrls: ['host-services-page.component.scss']
})
export class HostServicesPage {

    services: HostServiceModel[];

    constructor(private hostServicesService: HostServicesServiceService) {
    }

    ionViewWillEnter() {
        this.services = this.hostServicesService.getAllServices();
    }
}
