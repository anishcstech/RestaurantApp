import { Component, OnInit } from '@angular/core';

export interface Price {
  price:number;
  priceshow: string;
}
@Component({
  selector: 'app-price-check-compo',
  templateUrl: './price-check-compo.component.html',
  styleUrls: ['./price-check-compo.component.css']
})
export class PriceCheckCompoComponent implements OnInit {

 
  selectedvalue:string;
  constructor() { }

  ngOnInit() {
  }
  selectedValue: string;

  price_array: Price[] = [
    {price: 400, priceshow: 'bet 100-500'},
    {price:800, priceshow: 'bet 500-1000'},
    {price: 1200, priceshow: 'bet 1000-1500'},
    {price: 1800, priceshow: 'bet 1500-2000'},
    {price: 2300, priceshow: 'bet 2000-2500'},
    

  ];


}
