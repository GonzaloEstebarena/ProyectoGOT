import { GotHousesService } from './../../shared/services/houses/got-houses.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  houses = [];
  constructor(private housesServ: GotHousesService) { }

  ngOnInit(): void {
    this.housesServ.getHouses().subscribe((res:any)=>{
      console.log(res);
    })
      
    
  }

}
