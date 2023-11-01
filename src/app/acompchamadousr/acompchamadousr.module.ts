import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcompchamadousrPageRoutingModule } from './acompchamadousr-routing.module';

import { AcompchamadousrPage } from './acompchamadousr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcompchamadousrPageRoutingModule
  ],
  declarations: [AcompchamadousrPage]
})
export class AcompchamadousrPageModule {}
