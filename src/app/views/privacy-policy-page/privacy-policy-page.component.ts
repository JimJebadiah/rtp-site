import {Component, OnInit} from '@angular/core';
import {AssetService} from "../../services/asset-service";
import {AbstractPage} from "../abstract-page";

@Component({
  selector: 'rtp-privacy-policy-page',
  templateUrl: './privacy-policy-page.component.html',
  styleUrls: ['./privacy-policy-page.component.less']
})
export class PrivacyPolicyPageComponent extends AbstractPage implements OnInit{
  constructor( assetService: AssetService) {
    super(assetService);
  }
}
