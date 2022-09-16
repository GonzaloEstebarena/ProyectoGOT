import { HttpClientModule,HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { HousesPageComponent } from './pages/houses-page/houses-page.component';
import { CronologyPageComponent } from './pages/cronology-page/cronology-page.component';
import { HouseComponent } from './pages/houses-page/house/house.component';
import { CharacterDetailComponent } from './pages/characters-page/character-detail/character-detail.component';
import {TranslateHttpLoader} from '@ngx-translate/http-loader'
import {TranslateModule, TranslateLoader} from '@ngx-translate/core'
import { SimplebarAngularModule } from 'simplebar-angular';


export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/translation/','.json');

}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage:'es-ES',
      loader:{
         provide:TranslateLoader,
         useFactory:HttpLoaderFactory,
         deps:[HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
