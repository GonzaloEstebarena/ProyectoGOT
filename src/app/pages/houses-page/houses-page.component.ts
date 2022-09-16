import { GotHousesService } from './../../shared/services/houses/got-houses.service';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'app-houses-page',
  templateUrl: './houses-page.component.html',
  styleUrls: ['./houses-page.component.scss']
})
export class HousesPageComponent implements OnInit {

houses:any = [];
housesFiltered: any =[];
housesDefault: string = "https://i.ytimg.com/vi/-6vnomecItA/maxresdefault.jpg";
public isLoading:boolean=false;
options = { autoHide: false, scrollbarMinSize: 100 }


  constructor(private housesServ: GotHousesService) { }

  ngOnInit(): void {
    this.isLoading=true
    this.housesServ.getHouses().subscribe((res:any)=>{
      console.log(res);
      this.houses = res;
      this.housesFiltered = res;
      this.isLoading=false;
    },err=>{this.isLoading=false;})
    console.log(this.isLoading)
  }
  serchHouse(event:any){
    console.log(event.target.value);
    this.houses = this.housesFiltered.filter((ihous:any) =>{
      if(event.target.value === ''){
        return true;
      }
      return ihous.name.toLowerCase().includes(event?.target.value.toLowerCase())

    })
  }
}
