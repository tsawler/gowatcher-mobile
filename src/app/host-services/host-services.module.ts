import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HostServicesPage} from './host-services-page.component';

import {HostServicesPageRoutingModule} from './host-services-routing.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: HostServicesPage}]),
        HostServicesPageRoutingModule,
    ],
    declarations: [HostServicesPage]
})
export class HostServicesPageModule {
}
