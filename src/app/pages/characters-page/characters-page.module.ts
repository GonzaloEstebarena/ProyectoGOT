import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { SimplebarAngularModule } from 'simplebar-angular';
import { CharactersPageComponent } from './characters-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersPageRoutingModule } from './characters-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http,'../../../assets/translation','json');

}

@NgModule({
  declarations: [
    CharactersPageComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    CharactersPageRoutingModule,
    SimplebarAngularModule,
    TranslateModule.forRoot({
      defaultLanguage:'es-ES',
      loader:{
         provide:TranslateLoader,
         useFactory:HttpLoaderFactory,
         deps:[HttpClient]
      }
    })
  ]
})
export class CharactersPageModule { }
