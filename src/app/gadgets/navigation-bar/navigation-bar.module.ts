import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationBarComponent } from './navigation-bar.component';
import { NavigationBarButtonModule } from './navigation-bar-button/navigation-bar-button.module';
import {NgOptimizedImage} from "@angular/common";
import {NavigationBarMobileModule} from "./navigation-bar-mobile/navigation-bar-mobile.module";


@NgModule({
  declarations: [
    NavigationBarComponent
  ],
    imports: [
        BrowserModule,
        NavigationBarButtonModule,
        NavigationBarMobileModule,
        NgOptimizedImage,
    ],
  providers: [],
  exports: [NavigationBarComponent],
})
export class NavigationBarModule { }
