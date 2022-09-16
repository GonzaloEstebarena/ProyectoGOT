import { GotHousesService } from './../../../shared/services/houses/got-houses.service';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {
  house:any = [];
  constructor(
    private act: ActivatedRoute,
    private houseServ: GotHousesService) { }

  ngOnInit(): void {
    this.act.paramMap.subscribe((params:any)=>{
      this.houseServ.getOneHouse(params.get("idHouse")).subscribe((res:any) =>{
        console.log(res[0]);
        this.house = res[0];
      })
    })
  }

}
