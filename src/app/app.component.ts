import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-got';
 
  constructor(private translateService:TranslateService){}
  public selectLenguage(event:any){
    this.translateService.use(event)
    console.log(event)

  }
}
