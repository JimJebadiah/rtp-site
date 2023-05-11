import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadWidgetComponent } from './download-widget.component';
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



@NgModule({
  declarations: [
      DownloadWidgetComponent
  ],
  exports: [
      DownloadWidgetComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule
  ]
})
export class DownloadWidgetModule { }
