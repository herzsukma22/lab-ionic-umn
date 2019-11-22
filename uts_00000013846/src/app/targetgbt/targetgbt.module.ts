import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TargetgbtPage } from './targetgbt.page';

const routes: Routes = [
  {
    path: '',
    component: TargetgbtPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TargetgbtPage]
})
export class TargetgbtPageModule {}
