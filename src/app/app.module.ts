import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarModule } from './gadgets/navigation-bar/navigation-bar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterBarModule } from './gadgets/footer-bar/footer-bar.module';
import {HomePageModule} from "./views/home-page/home-page.module";
import {HttpClientModule} from "@angular/common/http";
import { PrivacyPolicyPageComponent } from './views/privacy-policy-page/privacy-policy-page.component';

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
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
