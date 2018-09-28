import { Component, OnInit } from '@angular/core';

export interface hotelList{
  img_val:string;
  description:string;
  rating:number;
}
@Component({
  selector: 'app-main-view-compo',
  templateUrl: './main-view-compo.component.html',
  styleUrls: ['./main-view-compo.component.css']
})
export class MainViewCompoComponent implements OnInit {
  listval:hotelList[];

 

  constructor() { }

  ngOnInit() {

    this.listval=[
      {"img_val":"a1.jpeg","description":"hdhfdfjdfjkhdf hdfjhjkhdfhjhdf ","rating":5},
      {"img_val":"a2.jpeg","description":"hdhfdfjdfjkhdf hdfjhjkhdfhjhdf ","rating":4},
      {"img_val":"a3.jpeg","description":"hdhfdfjdfjkhdf hdfjhjkhdfhjhdf ","rating":3},
      {"img_val":"a4.jpeg","description":"hdhfdfjdfjkhdf hdfjhjkhdfhjhdf ","rating":2},
      {"img_val":"a5.jpeg","description":"hdhfdfjdfjkhdf hdfjhjkhdfhjhdf ","rating":1},
   ];
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }

}
