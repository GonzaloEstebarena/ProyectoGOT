
import { GotService } from './../../shared/services/characters/got.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit {

characterGot=[];
charactersFiltered=[];
characterDetail=[]
public isLoading:boolean=false;

  constructor(private charactersGot: GotService) { }
  options = { autoHide: false, scrollbarMinSize: 100 }
  ngOnInit(): void {
    this.isLoading=true
    this.charactersGot.getGotData().subscribe((res:any)=>{
      console.log(res)
      this.characterGot=res
      this.charactersFiltered = res;
      this.isLoading=false;

    },err=>{this.isLoading=false;})
    console.log(this.isLoading)
  }
  getOneChar(i:any):void {
    this.characterDetail=this.characterGot[i]
    console.log(this.characterDetail)
 }
 search(event:any){
  console.log(event.target.value);
  this.characterGot = this.charactersFiltered.filter((ichars:any) =>{
    if(event.target.value === ''){
      return true;
    }
    return ichars.name.toLowerCase().includes(event?.target.value.toLowerCase())
  })
 }

}
