import {Component, HostListener, Input} from '@angular/core';
import {Event} from "@angular/router";

@Component({
  selector: 'rtp-navigation-bar-mobile',
  templateUrl: './navigation-bar-mobile.component.html',
  styleUrls: ['./navigation-bar-mobile.component.less']
})
export class NavigationBarMobileComponent {
  @HostListener('window:click', ['$event'])
  closeMenu(event: Event) {
    if (this.showExpanded) {
      this.showExpanded = false;
    }
  }

  @Input() navigationItems: ReadonlyArray<{link: string, text: string}> = [];

  showExpanded: boolean = false;

  toggleMenu(event: MouseEvent) {
    event.stopPropagation();
    this.showExpanded = !this.showExpanded;
  }
}
