import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/services/routing-service';
import {AssetService} from "../../services/asset-service";
import {AbstractPage} from "../abstract-page";

@Component({
  selector: 'rtp-construction-page',
  templateUrl: './construction-page.component.html',
  styleUrls: ['./construction-page.component.less']
})
export class ConstructionPageComponent extends AbstractPage  implements OnInit {

  constructor(assetService: AssetService) {
    super(assetService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.quote = this.getQuote();
  }

  quote: string = '';
  quotes = [
    'I\'d offer you a bacon butty but I ate my last one!',
    'I haven\'t woke anyone up at the crack of dawn for ages!',
    'Alright guv, let\'s get building!',
    'Watch the wobbly step on your way out!',
  ];

  private getQuote(): string {
    return this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }
}
