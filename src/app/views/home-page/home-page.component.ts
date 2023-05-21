import {Component, OnInit} from '@angular/core';
import {RoutingService} from "../../services/routing-service";
import {AssetService} from "../../services/asset-service";

@Component({
  selector: 'rtp-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {
  constructor(
    private readonly routingSvc: RoutingService,
    private readonly assetSvc: AssetService,
  ) {
  }

  background: string = '';
  backgroundCandy: string = '';

  ngOnInit() {
    this.background = `url(${this.assetSvc.constructAssetPath("assets/images/VP3-p-1080.png")})`;
    this.backgroundCandy = `url(${this.assetSvc.constructAssetPath("assets/images/candy.png")})`;
  }

  goToDownloads() {
    this.routingSvc.navigateToDownloadsPage();
  }
}
