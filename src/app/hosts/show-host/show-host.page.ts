import {Component, OnInit, ViewChild} from '@angular/core';
import {HostModel} from '../host.model';
import {ActivatedRoute} from '@angular/router';
import {IonSlides, NavController} from '@ionic/angular';
import {HostsService} from '../hosts.service';

@Component({
    selector: 'app-show-host',
    templateUrl: './show-host.page.html',
    styleUrls: ['./show-host.page.scss'],
})
export class ShowHostPage implements OnInit {
    @ViewChild('slides', {static: true}) slider: IonSlides;

    oneHost: HostModel;
    segment = 0;

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

    async segmentChanged(ev: any) {
        await this.slider.slideTo(this.segment);
    }

    async slideChanged() {
        this.segment = await this.slider.getActiveIndex();
    }

}
