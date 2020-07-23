import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HostServicePage } from './host-service.page';

const routes: Routes = [
  {
    path: '',
    component: HostServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HostServicePageRoutingModule {}
