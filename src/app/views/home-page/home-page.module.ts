import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomePageComponent } from './home-page.component';
import {ImageGalleryModule} from 'src/app/gadgets/gallery/gallery.module';
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    HomePageComponent
  ],
    imports: [
        BrowserModule,
        CommonModule,
        ImageGalleryModule,
        MatIconModule,
        MatButtonModule,
    ],
  providers: [],
  exports: [HomePageComponent],
})
export class HomePageModule { }
