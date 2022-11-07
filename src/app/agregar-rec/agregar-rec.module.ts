import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarRecPageRoutingModule } from './agregar-rec-routing.module';

import { AgregarRecPage } from './agregar-rec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarRecPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AgregarRecPage]
})
export class AgregarRecPageModule {}
