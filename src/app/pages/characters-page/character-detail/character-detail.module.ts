import { SimplebarAngularModule } from 'simplebar-angular';
import { CharacterDetailComponent } from './character-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterDetailRoutingModule } from './character-detail-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader'


export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http,'../../../../assets/translation','json');

}

@NgModule({
  declarations: [
    CharacterDetailComponent,
  ],
  imports: [
    CommonModule,
    CharacterDetailRoutingModule,
    SimplebarAngularModule,
    TranslateModule.forRoot({
      defaultLanguage:'es-ES',
      loader:{
         provide:TranslateLoader,
         useFactory:HttpLoaderFactory,
         deps:[HttpClient]
      }
    }),
  ]
})
export class CharacterDetailModule { }
