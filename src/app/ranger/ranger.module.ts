import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RangerPageRoutingModule } from './ranger-routing.module';

import { RangerPage } from './ranger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RangerPageRoutingModule
  ],
  declarations: [RangerPage]
})
export class RangerPageModule {}
