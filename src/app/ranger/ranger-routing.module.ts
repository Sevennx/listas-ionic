import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RangerPage } from './ranger.page';

const routes: Routes = [
  {
    path: '',
    component: RangerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RangerPageRoutingModule {}
