import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProblemPage} from './problem-page.component';

import {ProblemsPageRoutingModule} from './problems-routing.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ProblemsPageRoutingModule
    ],
    declarations: [ProblemPage]
})
export class ProblemsModule {
}
