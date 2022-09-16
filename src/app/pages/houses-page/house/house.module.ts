import { HouseComponent } from './house.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HouseRoutingModule } from './house-routing.module';


@NgModule({
  declarations: [
    HouseComponent,
  ],
  imports: [
    CommonModule,
    HouseRoutingModule
  ]
})
export class HouseModule { }
