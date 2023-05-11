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
}
