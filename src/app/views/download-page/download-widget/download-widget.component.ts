import {Component, Input} from '@angular/core';

export type DownloadStatus = 'Latest' | 'Archived';

@Component({
  selector: 'rtp-download-widget',
  templateUrl: './download-widget.component.html',
  styleUrls: ['./download-widget.component.less']
})
export class DownloadWidgetComponent {
  @Input()
  version: string = '';

  @Input()
  status: DownloadStatus = 'Archived';

  @Input()
  data: ReadonlyArray<{platform: string, link: string}> = [];

  navigateToLink(link: string) {
    if(!this.hasNoLink(link)) {
      window.open(link);
    }
  }

  hasNoLink(link: string) {
    return link === '';
  }
}
