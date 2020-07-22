import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProblemPage} from './problem-page.component';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';

import {ProblemsPageRoutingModule} from './problems-routing.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        ProblemsPageRoutingModule
    ],
    declarations: [ProblemPage]
})
export class ProblemsModule {
}
