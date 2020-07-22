import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'problems',
                loadChildren: () => import('../problems/problems.module').then(m => m.ProblemsModule)
            },
            {
                path: 'hosts',
                loadChildren: () => import('../hosts/hosts.module').then(m => m.HostsModule)
            },
            {
                path: 'host-services',
                loadChildren: () => import('../host-services/host-services.module').then(m => m.HostServicesPageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/problems',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/problems',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
