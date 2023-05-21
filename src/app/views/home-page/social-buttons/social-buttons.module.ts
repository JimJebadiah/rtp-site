import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialButtonsComponent } from './social-buttons.component';
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    SocialButtonsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    SocialButtonsComponent
  ]
})
export class SocialButtonsModule { }
