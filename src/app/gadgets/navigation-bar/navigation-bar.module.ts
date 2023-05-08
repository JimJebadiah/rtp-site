import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationBarComponent } from './navigation-bar.component';
import { NavigationBarButtonComponent } from './navigation-bar-button/navigation-bar-button.component';
import { NavigationBarButtonModule } from './navigation-bar-button/navigation-bar-button.module';
import {NgOptimizedImage} from "@angular/common";


@NgModule({
  declarations: [
    NavigationBarComponent
  ],
    imports: [
        BrowserModule,
        NavigationBarButtonModule,
        NgOptimizedImage,
    ],
  providers: [],
  exports: [NavigationBarComponent],
})
export class NavigationBarModule { }
