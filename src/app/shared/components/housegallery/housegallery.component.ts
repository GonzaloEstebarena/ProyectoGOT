import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-housegallery',
  templateUrl: './housegallery.component.html',
  styleUrls: ['./housegallery.component.scss']
})
export class HousegalleryComponent implements OnInit {

  @Input() public house:any  =[];

  options = { autoHide: false, scrollbarMinSize: 100 }

  constructor() { }

  ngOnInit(): void {
  }

}
