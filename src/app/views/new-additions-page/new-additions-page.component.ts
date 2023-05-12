import {Component, OnInit} from '@angular/core';
import {AssetService} from "../../services/asset-service";
import {AbstractPage} from "../abstract-page";

@Component({
  selector: 'rtp-new-additions-page',
  templateUrl: './new-additions-page.component.html',
  styleUrls: ['./new-additions-page.component.less']
})
export class NewAdditionsPageComponent extends AbstractPage implements OnInit {
  constructor(assetService: AssetService) {
    super(assetService);
  }
}
