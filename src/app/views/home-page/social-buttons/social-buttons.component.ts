import { Component } from '@angular/core';
import {RoutingService} from "../../../services/routing-service";

@Component({
  selector: 'rtp-social-buttons',
  templateUrl: './social-buttons.component.html',
  styleUrls: ['./social-buttons.component.less']
})
export class SocialButtonsComponent {
  constructor(private readonly routingSvc: RoutingService) {
  }

  goToDiscord() {
    this.routingSvc.navigateToDiscord();
  }

  goToPatreon() {
    this.routingSvc.navigateToPatreon();
  }

  goToXbox() {
    this.routingSvc.navigateToXbox();
  }
}
