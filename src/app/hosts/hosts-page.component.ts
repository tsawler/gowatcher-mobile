import {Component} from '@angular/core';
import {HostModel} from './host.model';
import {HostsService} from './hosts.service';
import {Router} from '@angular/router';
import {IonItemSliding} from '@ionic/angular';

@Component({
    selector: 'app-hosts-component',
    templateUrl: 'hosts-page.component.html',
    styleUrls: ['hosts-page.component.scss']
})
export class HostsPage {

    hosts: HostModel[];

    constructor(private hostsService: HostsService, private router: Router) {
    }

    ionViewWillEnter() {
        this.hosts = this.hostsService.getAllHosts();
    }

    onEdit(id: number, slidingItem: IonItemSliding) {
        slidingItem.close();
        this.router.navigateByUrl('/tabs/hosts/edit-host/' + id);
    }
}
