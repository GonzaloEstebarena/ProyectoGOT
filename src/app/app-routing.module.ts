import { HomeComponent } from './pages/home/home.component';
import { CharactersPageModule } from './pages/characters-page/characters-page.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path: "characters",loadChildren:()=>import
    ("./pages/characters-page/characters-page.module").then(m => m.CharactersPageModule)},
  {path: "characters/:idCharacter",loadChildren:()=>import
    ("./pages/characters-page/character-detail/character-detail.module").then(m => m.CharacterDetailModule)},
  {path: "houses",loadChildren:()=>import
    ("./pages/houses-page/houses-page.module").then(m => m.HousesPageModule)},
  {path: "houses/:idHouse",loadChildren:()=>import
    ("./pages/houses-page/house/house.module").then(m => m.HouseModule)},

  {path: "cronology",loadChildren:()=>import
    ("./pages/cronology-page/cronology-page.module").then(m => m.CronologyPageModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
