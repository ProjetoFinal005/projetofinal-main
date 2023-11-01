import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AceitrchamadsfuncPage } from './aceitrchamadsfunc.page';

const routes: Routes = [
  {
    path: '',
    component: AceitrchamadsfuncPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AceitrchamadsfuncPageRoutingModule {}
