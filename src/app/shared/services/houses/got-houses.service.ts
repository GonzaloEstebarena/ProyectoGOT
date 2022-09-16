import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GotHousesService {

  constructor(private http: HttpClient) { }
  getHouses(){
    return this.http.get("https://api.got.show/api/show/houses");
  }
  getOneHouse(id:any){
    return this.http.get(`https://api.got.show/api/show/houses/${id}`);
  }
}
