import { SimplebarAngularModule } from 'simplebar-angular';
import { HousesPageComponent } from './houses-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousesPageRoutingModule } from './houses-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HousesPageComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    HousesPageRoutingModule,
    SimplebarAngularModule,

  ]
})
export class HousesPageModule { }
