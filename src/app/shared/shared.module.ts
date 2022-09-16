import { RouterModule } from '@angular/router';
import { SimplebarAngularModule } from 'simplebar-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactergalleryComponent } from './components/charactergallery/charactergallery.component';
import { HousegalleryComponent } from './components/housegallery/housegallery.component';



@NgModule({
  declarations: [
    CharactergalleryComponent,
    HousegalleryComponent
  ],
  imports: [
    CommonModule,
    SimplebarAngularModule,
    RouterModule,

  ],
  exports:[
    CharactergalleryComponent,
    HousegalleryComponent

  ]
})
export class SharedModule { }
