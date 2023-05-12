import {Component, OnInit} from '@angular/core';
import {AssetService, DownloadObject, DownloadSource, TEMPLATE_VERSION} from "../../services/asset-service";
import {AbstractPage} from "../abstract-page";

@Component({
  selector: 'rtp-download-page',
  templateUrl: './download-page.component.html',
  styleUrls: ['./download-page.component.less']
})
export class DownloadPageComponent extends AbstractPage implements OnInit {
  constructor(assetService: AssetService) {
    super(assetService);
  }
  downloads: Array<DownloadObject> = [];

  override ngOnInit() {
    super.ngOnInit();
    this.assetService.loadDownloads().subscribe((downloads) => {
      this.downloads = downloads;
      this.downloads = this.downloads.filter((obj) => obj.version !== TEMPLATE_VERSION);
      this.downloads = this.downloads.sort(() => 1);
    });
  }
}
