import { SimplebarAngularModule } from 'simplebar-angular';
import { CronologyPageComponent } from './cronology-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronologyPageRoutingModule } from './cronology-page-routing.module';


@NgModule({
  declarations: [
    CronologyPageComponent,
  ],
  imports: [
    CommonModule,
    CronologyPageRoutingModule,
    SimplebarAngularModule
  ]
})
export class CronologyPageModule { }
