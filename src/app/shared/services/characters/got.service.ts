import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GotService {

  constructor(private http: HttpClient) { }
  getGotData(){
    return this.http.get("https://api.got.show/api/show/characters")
  }
  getOneCharacter(id:any){
    return this.http.get(`https://api.got.show/api/show/characters/${id}`);
  }
 
}
