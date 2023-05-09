import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrivacyPolicyPageComponent} from "./privacy-policy-page.component";



@NgModule({
  declarations: [
    PrivacyPolicyPageComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PrivacyPolicyPageComponent,
  ]
})
export class PrivacyPolicyPageModule { }
