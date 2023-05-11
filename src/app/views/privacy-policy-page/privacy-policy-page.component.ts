import {Component, OnInit} from '@angular/core';
import {AssetService} from "../../services/asset-service";

@Component({
  selector: 'rtp-privacy-policy-page',
  templateUrl: './privacy-policy-page.component.html',
  styleUrls: ['./privacy-policy-page.component.less']
})
export class PrivacyPolicyPageComponent implements OnInit{
  constructor(private readonly assetService: AssetService) {
  }

  backgroundImage: string = '';

  ngOnInit() {
    this.backgroundImage = `url(${this.assetService.constructAssetPath('assets/images/candy.png')})`;
  }
}
