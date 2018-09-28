import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-compo',
  templateUrl: './contact-compo.component.html',
  styleUrls: ['./contact-compo.component.css']
})
export class ContactCompoComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email, 
  ]);
  constructor() { }

  ngOnInit() {
  }

}
