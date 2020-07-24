import {Component, OnInit} from '@angular/core';
import {HostModel} from '../host.model';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {HostsService} from '../hosts.service';

@Component({
    selector: 'app-show-host',
    templateUrl: './show-host.page.html',
    styleUrls: ['./show-host.page.scss'],
})
export class ShowHostPage implements OnInit {

    oneHost: HostModel;

    constructor(private route: ActivatedRoute, private navCtrl: NavController, private hostService: HostsService) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            if (!paramMap.has('hostId')) {
                this.navCtrl.navigateBack('/tabs/hosts');
                return;
            }
            this.oneHost = this.hostService.getHost(paramMap.get('hostId'));
        });
    }

    ionOnViewWillEnter() {

    }

}
