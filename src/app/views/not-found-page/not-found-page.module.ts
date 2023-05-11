import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotFoundPageComponent} from "./not-found-page.component";
import {MatExpansionModule} from "@angular/material/expansion";



@NgModule({
  declarations: [
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  exports: [
    NotFoundPageComponent
  ]
})
export class NotFoundPageModule { }
