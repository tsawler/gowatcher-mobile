import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowHostPage } from './show-host.page';

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
export class ShowHostPageRoutingModule {}
