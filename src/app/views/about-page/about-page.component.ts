import {Component, OnInit} from '@angular/core';
import {AssetService} from "../../services/asset-service";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.less']
})
export class AboutPageComponent implements OnInit {
  constructor(private readonly assetService: AssetService) {
  }

  backgroundImage: string = '';

  ngOnInit() {
    this.backgroundImage = `url(${this.assetService.constructAssetPath('assets/images/candy.png')})`;
  }
}
