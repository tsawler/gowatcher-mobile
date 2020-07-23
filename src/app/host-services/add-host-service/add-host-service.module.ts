import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddHostServicePageRoutingModule } from './add-host-service-routing.module';

import { AddHostServicePage } from './add-host-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddHostServicePageRoutingModule
  ],
  declarations: [AddHostServicePage]
})
export class AddHostServicePageModule {}
