import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAdditionsPageComponent } from './new-additions-page.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import {PINATA_PARAM, PINATA_PATH} from "../../services/routing-service";
import {PinataPageComponent} from "./pinata-page/pinata-page.component";
import {PinataPageModule} from "./pinata-page/pinata-page.module";
import {NewAdditionsRootPageModule} from "./new-additions-root-page/new-additions-root-page.module";



@NgModule({
  declarations: [
    NewAdditionsPageComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    PinataPageModule,
    NewAdditionsRootPageModule
  ],
  exports: [
    NewAdditionsPageComponent
  ]
})
export class NewAdditionsPageModule { }
