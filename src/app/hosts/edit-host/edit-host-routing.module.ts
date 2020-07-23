import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditHostPage } from './edit-host.page';

const routes: Routes = [
  {
    path: '',
    component: EditHostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditHostPageRoutingModule {}
