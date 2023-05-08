import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConstructionPageComponent } from './construction-page.component';


@NgModule({
  declarations: [
    ConstructionPageComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [ConstructionPageModule],
})
export class ConstructionPageModule { }
