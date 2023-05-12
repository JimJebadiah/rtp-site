import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutPageModule} from "./about-page/about-page.module";
import {ConstructionPageModule} from "./construction-page/construction-page.module";
import {DownloadPageModule} from "./download-page/download-page.module";
import {HomePageModule} from "./home-page/home-page.module";
import {NewAdditionsPageModule} from "./new-additions-page/new-additions-page.module";
import {NotFoundPageModule} from "./not-found-page/not-found-page.module";
import {PrivacyPolicyPageModule} from "./privacy-policy-page/privacy-policy-page.module";
import {PinataPageModule} from "./new-additions-page/pinata-page/pinata-page.module";
import {ContactPageModule} from "./contact-page/contact-page.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutPageModule,
    ConstructionPageModule,
    DownloadPageModule,
    HomePageModule,
    NewAdditionsPageModule,
    NotFoundPageModule,
    PrivacyPolicyPageModule,
    ContactPageModule
  ]
})
export class ViewsModule { }
