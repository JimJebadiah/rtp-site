import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAdditionsRootPageComponent } from './new-additions-root-page.component';
import {NewAdditionsPageComponent} from "../new-additions-page.component";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    NewAdditionsRootPageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    NewAdditionsRootPageComponent,
  ]
})
export class NewAdditionsRootPageModule { }
