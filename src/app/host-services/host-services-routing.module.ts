import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HostServicesPage} from './host-services-page.component';

const routes: Routes = [
    {
        path: '',
        component: HostServicesPage,
    },
  {
    path: 'host-service',
    loadChildren: () => import('./host-service/host-service.module').then( m => m.HostServicePageModule)
  },
  {
    path: 'edit-host-service',
    loadChildren: () => import('./edit-host-service/edit-host-service.module').then( m => m.EditHostServicePageModule)
  },
  {
    path: 'add-host-service',
    loadChildren: () => import('./add-host-service/add-host-service.module').then( m => m.AddHostServicePageModule)
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HostServicesPageRoutingModule {
}
