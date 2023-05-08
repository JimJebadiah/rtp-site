import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterBarComponent } from './footer-bar.component';


@NgModule({
  declarations: [
    FooterBarComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [FooterBarComponent],
})
export class FooterBarModule { }
