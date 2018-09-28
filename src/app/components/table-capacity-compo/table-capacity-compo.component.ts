import { Component, OnInit } from '@angular/core';

export interface seatcap {
  seatnums:number;
  seatshow: string;
}

@Component({
  selector: 'app-table-capacity-compo',
  templateUrl: './table-capacity-compo.component.html',
  styleUrls: ['./table-capacity-compo.component.css']
})
export class TableCapacityCompoComponent implements OnInit {

  selectedValue:string;
  constructor() { }

  ngOnInit() {
  }
  seat_array: seatcap[] = [
    {seatnums:2, seatshow: 'Two'},
    {seatnums: 4, seatshow: 'Four'},
    {seatnums: 6, seatshow: 'Six'},
    {seatnums: 8, seatshow: 'Eight'},
    {seatnums: 10, seatshow: 'Ten'}

  ];
}
