import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


export interface Rate {
  rating:number;
  viewrating: string;
}

@Component({
  selector: 'app-rating-check-compo',
  templateUrl: './rating-check-compo.component.html',
  styleUrls: ['./rating-check-compo.component.css']
})
export class RatingCheckCompoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selectedValue: string;

  rates: Rate[] = [
    {rating:1, viewrating: 'One'},
    {rating: 2, viewrating: 'Two'},
    {rating: 3, viewrating: 'Three'},
    {rating: 4, viewrating: 'Four'},
    {rating: 5, viewrating: 'Five'}

  ];

}
