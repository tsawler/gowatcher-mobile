import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HostServicePageRoutingModule } from './host-service-routing.module';

import { HostServicePage } from './host-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HostServicePageRoutingModule
  ],
  declarations: [HostServicePage]
})
export class HostServicePageModule {}
