import {Directive, OnInit} from "@angular/core";
import {AssetService} from "../services/asset-service";

@Directive()
export abstract class AbstractPage {
  protected constructor(protected readonly assetService: AssetService) {
  }

  backgroundImage: string = '';

  ngOnInit() {
    this.backgroundImage = `url(${this.assetService.constructAssetPath('assets/images/candy.png')})`;
  }
}
