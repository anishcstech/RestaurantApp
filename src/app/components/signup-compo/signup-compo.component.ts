import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-signup-compo',
  templateUrl: './signup-compo.component.html',
  styleUrls: ['./signup-compo.component.css']
})
export class SignupCompoComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email, 
  ]);
  hide=true;
  constructor() { }

  ngOnInit() {
  }

}
