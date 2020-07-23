import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProblemDetailPageRoutingModule } from './problem-detail-routing.module';

import { ProblemDetailPage } from './problem-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProblemDetailPageRoutingModule
  ],
  declarations: [ProblemDetailPage]
})
export class ProblemDetailPageModule {}
