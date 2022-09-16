import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-charactergallery',
  templateUrl: './charactergallery.component.html',
  styleUrls: ['./charactergallery.component.scss']
})
export class CharactergalleryComponent implements OnInit {
  @Input() characterGot:any;
  options = { autoHide: false, scrollbarMinSize: 100 }
  public isLoading:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}
