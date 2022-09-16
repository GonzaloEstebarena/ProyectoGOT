import { CharactersPageComponent } from './../characters-page/characters-page.component';
import { Component, OnInit } from '@angular/core';
import { GotService } from './../../shared/services/characters/got.service';
@Component({
  selector: 'app-cronology-page',
  templateUrl: './cronology-page.component.html',
  styleUrls: ['./cronology-page.component.scss'],
})
export class CronologyPageComponent implements OnInit {
  characterGot = [];
  options = { autoHide: false, scrollbarMinSize: 100 }
  constructor(private charactersGot: GotService) {}

  ngOnInit(): void {
    this.charactersGot.getGotData().subscribe((res: any) => {
      console.log(res);
      this.characterGot = res.filter(check);

      function check(res:any){
        if(res?.age?.age) return res;
      }

      this.characterGot = this.characterGot.sort((a:any, b:any)=>{
        return a?.age?.age - b?.age?.age;
      })
    });
    
    
  }
    reverse(){
      this.characterGot.reverse()
    }
}
