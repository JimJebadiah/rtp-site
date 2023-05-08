import { Component, Input } from '@angular/core';
import { RoutingService } from 'src/app/services/routing-service';

@Component({
  selector: 'rtp-navigation-bar-button',
  templateUrl: './navigation-bar-button.component.html',
  styleUrls: ['./navigation-bar-button.component.less']
})
export class NavigationBarButtonComponent {

  constructor(private readonly routingSvc: RoutingService) { }

  @Input()
  navigationLink: string = '';

  @Input()
  text: string = '';

  onClick() {
    console.log(':)');
    this.routingSvc.navigateToPage(this.navigationLink);
  }

  isFocused(): boolean {
    return location.href.split('/').includes(this.navigationLink);
  }

}
