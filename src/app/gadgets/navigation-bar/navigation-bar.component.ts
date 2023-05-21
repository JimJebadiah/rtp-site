import { Component } from '@angular/core';
import {
  ABOUT_PATH,
  CONTACT_PATH,
  DOWNLOAD_PATH,
  NEW_ADDITIONS_PATH,
  NEWS_PATH,
  POLICY_PATH,
  RoutingService, WIKI_PATH,
} from 'src/app/services/routing-service';

@Component({
  selector: 'rtp-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.less']
})
export class NavigationBarComponent {

  constructor(private readonly routingSvc: RoutingService) { }

  text: string = 'hello';

  // Items used in the navigation bar
  navigationItems: ReadonlyArray<{link: string, text: string}> = [
    {
      link: ABOUT_PATH,
      text: 'About',
    },
    {
      link: NEWS_PATH,
      text: 'News',
    },
    {
      link: DOWNLOAD_PATH,
      text: 'Downloads',
    },
    {
      link: POLICY_PATH,
      text: 'Privacy Policy',
    },
    {
      link: CONTACT_PATH,
      text: 'Contact',
    },
    {
      link: NEW_ADDITIONS_PATH,
      text: 'New Additions',
    },
    {
      link: WIKI_PATH,
      text: 'Wiki',
    }
  ];

  navigateHome() {
    this.routingSvc.navigateToHomePage();
  }
}
