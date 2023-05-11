import {Component, OnInit} from '@angular/core';
import {AssetService, DownloadObject, DownloadSource, TEMPLATE_VERSION} from "../../services/asset-service";

@Component({
  selector: 'rtp-download-page',
  templateUrl: './download-page.component.html',
  styleUrls: ['./download-page.component.less']
})
export class DownloadPageComponent implements OnInit {
  constructor(private readonly assetService: AssetService) {
  }

  backgroundImage: string = '';
  downloads: Array<DownloadObject> = [];

  ngOnInit() {
    this.backgroundImage = `url(${this.assetService.constructAssetPath('assets/images/candy.png')})`;
    this.assetService.loadDownloads().subscribe((downloads) => {
      this.downloads = downloads;
      this.downloads = this.downloads.filter((obj) => obj.version !== TEMPLATE_VERSION);
      this.downloads = this.downloads.sort(() => 1);
    });
  }
}
