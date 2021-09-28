import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-show-popup',
  templateUrl: './show-popup.component.html',
  styleUrls: ['./show-popup.component.css']
})
export class ShowPopupComponent implements OnInit {
@Input('item1') item1:any;
@Input('item2') item2:any;
   constructor() { }

  ngOnInit(): void {
  }

}
