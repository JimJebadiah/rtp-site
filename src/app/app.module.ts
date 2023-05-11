import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarModule } from './gadgets/navigation-bar/navigation-bar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterBarModule } from './gadgets/footer-bar/footer-bar.module';
import {HttpClientModule} from "@angular/common/http";
import {APP_BASE_HREF, CommonModule, PlatformLocation} from "@angular/common";
import {ViewsModule} from "./views/views.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // ANGULAR
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // COMPONENTS
    NavigationBarModule,
    FooterBarModule,
    ViewsModule
  ],
  providers: [{
    provide: APP_BASE_HREF,
    useFactory: (s: PlatformLocation) => s.getBaseHrefFromDOM(),
    deps: [PlatformLocation]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
