import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicichamadousrPageRoutingModule } from './solicichamadousr-routing.module';

import { SolicichamadousrPage } from './solicichamadousr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicichamadousrPageRoutingModule
  ],
  declarations: [SolicichamadousrPage]
})
export class SolicichamadousrPageModule {}
