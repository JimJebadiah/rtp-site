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

  images = [
    'https://returnofparadise.com/images/rectangle_4.png',
    'https://returnofparadise.com/images/rectangle_3.png',
    'https://returnofparadise.com/images/rectangle_2.png',
    'https://returnofparadise.com/images/rectangle_12.png',
    'https://returnofparadise.com/images/rectangle_9.png',
  ];
}
