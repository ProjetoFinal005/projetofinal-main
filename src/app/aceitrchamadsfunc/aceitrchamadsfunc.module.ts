import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AceitrchamadsfuncPageRoutingModule } from './aceitrchamadsfunc-routing.module';

import { AceitrchamadsfuncPage } from './aceitrchamadsfunc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AceitrchamadsfuncPageRoutingModule
  ],
  declarations: [AceitrchamadsfuncPage]
})
export class AceitrchamadsfuncPageModule {}
