import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ShowHostPageRoutingModule} from './show-host-routing.module';

import {ShowHostPage} from './show-host.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ShowHostPageRoutingModule
    ],
    declarations: [ShowHostPage]
})
export class ShowHostPageModule {
}
