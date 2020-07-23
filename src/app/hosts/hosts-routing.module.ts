import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HostsPage} from './hosts-page.component';

const routes: Routes = [

    {
        path: 'add-host',
        loadChildren: () => import('./add-host/add-host.module').then(m => m.AddHostPageModule)
    },
    {
        path: 'edit-host/:hostId',
        loadChildren: () => import('./edit-host/edit-host.module').then(m => m.EditHostPageModule)
    },
    {
        path: ':hostId',
        loadChildren: () => import('./show-host/show-host.module').then(m => m.ShowHostPageModule)
    },
    {
        path: '',
        component: HostsPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HostsPageRoutingModule {
}
