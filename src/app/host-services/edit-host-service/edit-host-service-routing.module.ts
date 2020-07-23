import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditHostServicePage } from './edit-host-service.page';

const routes: Routes = [
  {
    path: '',
    component: EditHostServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditHostServicePageRoutingModule {}
