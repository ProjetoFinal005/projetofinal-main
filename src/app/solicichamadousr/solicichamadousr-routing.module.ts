import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicichamadousrPage } from './solicichamadousr.page';

const routes: Routes = [
  {
    path: '',
    component: SolicichamadousrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicichamadousrPageRoutingModule {}
