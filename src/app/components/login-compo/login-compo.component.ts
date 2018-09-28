import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-compo',
  templateUrl: './login-compo.component.html',
  styleUrls: ['./login-compo.component.css']
})
export class LoginCompoComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email, 
  ]);
  hide=true;
  constructor() { }

  ngOnInit() {
  }

}
