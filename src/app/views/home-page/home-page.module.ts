import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomePageComponent } from './home-page.component';
import {ImageGalleryModule} from 'src/app/gadgets/gallery/gallery.module';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    ImageGalleryModule,
    MatIconModule,
  ],
  providers: [],
  exports: [HomePageComponent],
})
export class HomePageModule { }
