import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarMobileComponent } from './navigation-bar-mobile.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {NavigationBarButtonModule} from "../navigation-bar-button/navigation-bar-button.module";



@NgModule({
  declarations: [
    NavigationBarMobileComponent
  ],
  exports: [
    NavigationBarMobileComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    NavigationBarButtonModule
  ]
})
export class NavigationBarMobileModule { }
