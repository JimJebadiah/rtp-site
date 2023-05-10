import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConstructionPageComponent } from './construction-page.component';
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    ConstructionPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
  providers: [],
  exports: [ConstructionPageComponent],
})
export class ConstructionPageModule { }
