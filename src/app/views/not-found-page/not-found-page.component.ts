import {Component, OnInit} from '@angular/core';
import {AssetService} from "../../services/asset-service";
import {AbstractPage} from "../abstract-page";

@Component({
  selector: 'rtp-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.less']
})
export class NotFoundPageComponent extends AbstractPage implements OnInit {
  constructor(assetService: AssetService) {
    super(assetService);
  }
}
