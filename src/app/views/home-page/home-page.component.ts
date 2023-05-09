import { Component } from '@angular/core';
import {RoutingService} from "../../services/routing-service";

@Component({
  selector: 'rtp-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent {
  constructor(private readonly routingSvc: RoutingService) {
  }

  goToDownloads() {
    this.routingSvc.navigateToDownloadsPage();
  }
}
