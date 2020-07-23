import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AddHostPageRoutingModule} from './add-host-routing.module';

import {AddHostPage} from './add-host.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AddHostPageRoutingModule
    ],
    declarations: [AddHostPage]
})
export class AddHostPageModule {
}
