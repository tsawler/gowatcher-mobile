import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditHostServicePageRoutingModule } from './edit-host-service-routing.module';

import { EditHostServicePage } from './edit-host-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditHostServicePageRoutingModule
  ],
  declarations: [EditHostServicePage]
})
export class EditHostServicePageModule {}
