import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HostsPage} from './hosts-page.component';

const routes: Routes = [
    {
        path: '',
        component: HostsPage,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HostsPageRoutingModule {
}
