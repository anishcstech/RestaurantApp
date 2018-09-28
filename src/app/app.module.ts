import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavCompoComponent } from './components/nav-compo/nav-compo.component';
import { LoginCompoComponent } from './components/login-compo/login-compo.component';
import { SignupCompoComponent } from './components/signup-compo/signup-compo.component';
import { SearchCategoryCompoComponent } from './components/search-category-compo/search-category-compo.component';
import { SearchLocationCompoComponent } from './components/search-location-compo/search-location-compo.component';
import { FooterCompoComponent } from './components/footer-compo/footer-compo.component';
import {MatStepperModule} from '@angular/material/stepper';

import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule,
   MatGridListModule,MatAutocompleteModule, MatFormFieldModule, 
} from '@angular/material';
import { StepperCompoComponent } from './components/stepper-compo/stepper-compo.component';
import {MatBadgeModule} from '@angular/material/badge';
import { AboutCompoComponent } from './components/about-compo/about-compo.component';
import { ContactCompoComponent } from './components/contact-compo/contact-compo.component';
import { ExpandCompoComponent } from './components/expand-compo/expand-compo.component';
import { RatingCheckCompoComponent } from './components/rating-check-compo/rating-check-compo.component';
import { PriceCheckCompoComponent } from './components/price-check-compo/price-check-compo.component';
import { MainViewCompoComponent } from './components/main-view-compo/main-view-compo.component';
import { TableCapacityCompoComponent } from './components/table-capacity-compo/table-capacity-compo.component';
import { EntranceViewCompoComponent } from './components/entrance-view-compo/entrance-view-compo.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatSelectModule} from "@angular/material/select";
import { ForgetPasswordCompoComponent } from './components/forget-password-compo/forget-password-compo.component';
import { BookingCompoComponent } from './components/booking-compo/booking-compo.component';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    NavCompoComponent,
    LoginCompoComponent,
    SignupCompoComponent,
    SearchCategoryCompoComponent,
    SearchLocationCompoComponent,
    FooterCompoComponent,
    StepperCompoComponent,
    AboutCompoComponent,
    ContactCompoComponent,
    ExpandCompoComponent,
    RatingCheckCompoComponent,
    PriceCheckCompoComponent,
    MainViewCompoComponent,
    TableCapacityCompoComponent,
    EntranceViewCompoComponent,
    ForgetPasswordCompoComponent,
    BookingCompoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatGridListModule,
    
    CommonModule, 
    MatToolbarModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatDialogModule,
    MatExpansionModule,
    MatSelectModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
