import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarModule } from './gadgets/navigation-bar/navigation-bar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterBarModule } from './gadgets/footer-bar/footer-bar.module';
import {HomePageModule} from "./views/home-page/home-page.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationBarModule,
    FooterBarModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
