import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddHostPage } from './add-host.page';

const routes: Routes = [
  {
    path: '',
    component: AddHostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddHostPageRoutingModule {}
