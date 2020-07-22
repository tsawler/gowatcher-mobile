import {Component} from '@angular/core';
import {HostModel} from './host.model';
import {HostsServiceService} from './hosts-service.service';

@Component({
    selector: 'app-tab2',
    templateUrl: 'hosts-page.component.html',
    styleUrls: ['hosts-page.component.scss']
})
export class HostsPage {

    hosts: HostModel[];

    constructor(private hostsService: HostsServiceService) {
    }

    ionViewWillEnter() {
        this.hosts = this.hostsService.getAllHosts();
    }
}
