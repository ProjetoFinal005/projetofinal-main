import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcompchamadousrPage } from './acompchamadousr.page';

const routes: Routes = [
  {
    path: '',
    component: AcompchamadousrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcompchamadousrPageRoutingModule {}
