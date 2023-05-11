import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DownloadPageComponent} from "./download-page.component";
import {DownloadWidgetModule} from "./download-widget/download-widget.module";



@NgModule({
  declarations: [DownloadPageComponent],
  imports: [
    CommonModule,
    DownloadWidgetModule
  ],
  exports: [DownloadPageComponent]
})
export class DownloadPageModule { }
