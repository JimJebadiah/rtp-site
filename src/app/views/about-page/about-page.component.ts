import {Component, OnInit} from '@angular/core';
import {AssetService} from "../../services/asset-service";
import {AbstractPage} from "../abstract-page";

@Component({
  selector: 'rtp-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.less']
})
export class AboutPageComponent extends AbstractPage implements OnInit {
  constructor(assetService: AssetService) {
    super(assetService);
  }
}
