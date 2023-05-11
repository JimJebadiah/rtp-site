import {Component, OnInit} from '@angular/core';
import {AssetService} from "../../services/asset-service";

@Component({
  selector: 'rtp-new-additions-page',
  templateUrl: './new-additions-page.component.html',
  styleUrls: ['./new-additions-page.component.less']
})
export class NewAdditionsPageComponent implements OnInit {
  constructor(private readonly assetService: AssetService) {
  }

  backgroundImage: string = '';

  ngOnInit() {
    this.backgroundImage = `url(${this.assetService.constructAssetPath('assets/images/candy.png')})`;
  }
}
