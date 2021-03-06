import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HostsPage} from './hosts-page.component';

import {HostsPageRoutingModule} from './hosts-routing.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        HostsPageRoutingModule
    ],
    declarations: [HostsPage]
})
export class HostsModule {
}
