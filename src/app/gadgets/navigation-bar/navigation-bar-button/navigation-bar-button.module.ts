import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationBarButtonComponent } from './navigation-bar-button.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    NavigationBarButtonComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
  ],
  providers: [],
  exports: [NavigationBarButtonComponent],
})
export class NavigationBarButtonModule { }
