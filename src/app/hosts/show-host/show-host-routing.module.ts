import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ShowHostPage} from './show-host.page';

const routes: Routes = [
    {
        path: '',
        component: ShowHostPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ShowHostPageRoutingModule {
}
