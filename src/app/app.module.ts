import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarModule } from './gadgets/navigation-bar/navigation-bar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterBarModule } from './gadgets/footer-bar/footer-bar.module';
import {HttpClientModule} from "@angular/common/http";
import {APP_BASE_HREF, CommonModule, PlatformLocation} from "@angular/common";
import {ConstructionPageModule} from "./views/construction-page/construction-page.module";
import {PrivacyPolicyPageModule} from "./views/privacy-policy-page/privacy-policy-page.module";
import {AboutPageModule} from "./views/about-page/about-page.module";
import {HomePageModule} from "./views/home-page/home-page.module";
import {NotFoundPageModule} from "./views/not-found-page/not-found-page.module";
import {DownloadPageModule} from "./views/download-page/download-page.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NavigationBarModule,
    FooterBarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ConstructionPageModule,
    PrivacyPolicyPageModule,
    AboutPageModule,
    HomePageModule,
    NotFoundPageModule,
    DownloadPageModule,
  ],
  providers: [{
    provide: APP_BASE_HREF,
    useFactory: (s: PlatformLocation) => s.getBaseHrefFromDOM(),
    deps: [PlatformLocation]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
