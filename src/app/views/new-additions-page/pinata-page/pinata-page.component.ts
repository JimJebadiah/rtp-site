import {Component, OnInit} from '@angular/core';
import {AssetService, Pinata, Requirements} from "../../../services/asset-service";
import {PinataService} from "../../../services/pinata-service";
import {ActivatedRoute} from "@angular/router";
import {tap} from "rxjs";
import {PINATA_PARAM, RoutingService} from "../../../services/routing-service";
import {LangUtils} from "../../../lang-utils";

@Component({
  selector: 'app-pinata-page',
  templateUrl: './pinata-page.component.html',
  styleUrls: ['./pinata-page.component.less']
})
export class PinataPageComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly assetService: AssetService,
    private readonly pinataService: PinataService,
    private readonly routingService: RoutingService,
  ) { }

  backgroundImage: string = '';
  pinataName: string = '';
  pinata: Pinata | undefined = undefined;
  reqs: Requirements = {} as Requirements;

  ngOnInit() {
    this.backgroundImage = `url(${this.assetService.constructAssetPath('assets/images/candy.png')})`;
    this.route.paramMap.pipe(
      tap((paramMap) => {
        if (paramMap.has(PINATA_PARAM)) {
          this.pinataName = paramMap.get(PINATA_PARAM) ?? '';
        }
      }),
    ).subscribe(() => {
      this.pinataService.getPinata(this.pinataName).subscribe((pinata) => {
        console.log(this.pinata);
        this.pinata = pinata;
        this.reqs = pinata?.requirements ?? {} as Requirements;
        console.log(pinata);
        if (!LangUtils.exists(pinata)) {
          this.routingService.navigateTo404();
        }
      });
    });
  }

  protected readonly LangUtils = LangUtils;
}
