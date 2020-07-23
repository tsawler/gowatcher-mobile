import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditHostPageRoutingModule } from './edit-host-routing.module';

import { EditHostPage } from './edit-host.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditHostPageRoutingModule
  ],
  declarations: [EditHostPage]
})
export class EditHostPageModule {}
