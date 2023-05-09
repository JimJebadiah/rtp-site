import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { GalleryComponent } from "./gallery.component";
import {MatIconModule} from "@angular/material/icon";
import {SlickCarouselModule} from "ngx-slick-carousel";



@NgModule({
  declarations: [
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    SlickCarouselModule,
  ],
  providers: [],
  exports: [GalleryComponent],
})
export class ImageGalleryModule { }
