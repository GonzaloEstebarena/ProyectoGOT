import { TranslateService } from '@ngx-translate/core';
import { GotService } from './../../../shared/services/characters/got.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GotHousesService } from 'src/app/shared/services/houses/got-houses.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  character:any = [];
  house:any = [];
  options = { autoHide: false, scrollbarMinSize: 100 }
  constructor(
    private act:ActivatedRoute,
    private characterServ: GotService,
    private translateService: TranslateService,
    private houseServ: GotHousesService ) { 
    this.act.paramMap.subscribe(params=>{
      this.characterServ.getOneCharacter(params.get("idCharacter")).subscribe((res:any) => {
        console.log(res);
        this.character = res;
        this.houseServ.getOneHouse(res.house).subscribe((res:any) =>{
          console.log(res[0]);
          this.house = res[0];
        })
      })
    }) 
    
  }
  public selectLenguage(event:any){
    this.translateService.use(event)
    console.log(event)

  }
  ngOnInit(): void {

  }

}
