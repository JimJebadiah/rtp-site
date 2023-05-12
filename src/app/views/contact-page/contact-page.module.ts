import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page.component';
import {BrowserModule} from "@angular/platform-browser";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";



@NgModule({
  declarations: [
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
  ],
  exports: [
    ContactPageComponent
  ]
})
export class ContactPageModule { }
