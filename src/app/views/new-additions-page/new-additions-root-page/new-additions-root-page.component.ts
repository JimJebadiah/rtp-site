import { Component } from '@angular/core';

@Component({
  selector: 'rtp-new-additions-root-page',
  templateUrl: './new-additions-root-page.component.html',
  styleUrls: ['./new-additions-root-page.component.less']
})
export class NewAdditionsRootPageComponent {
  goToSlides() {
    window.open("https://docs.google.com/presentation/d/1Qu-QqI9SLaIaCRtTg2VvvE1yNMbdDoAZ4nMCJXaItgI/edit#slide=id.ge51ce7486318100_68");
  }

  goToHomesSlides() {
    window.open("https://docs.google.com/presentation/d/1UhK7i-MyN15iqnCOqJq3BHtN4DbNrxlo7o5RfLz9zaU/edit#slide=id.g7ed22e581e_0_268");
  }
}
