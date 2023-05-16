import {Component, OnInit} from '@angular/core';
import {AbstractPage} from "../abstract-page";
import {AssetService} from "../../services/asset-service";
import {ActivatedRoute} from "@angular/router";
import {Article, IMAGE_DELIM, NewsService, VIDEO_DELIM} from "../../services/news-service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.less']
})
export class ArticlePageComponent extends AbstractPage implements OnInit{
  article: Article | undefined = undefined;

  constructor(assetService: AssetService, private readonly route: ActivatedRoute, private readonly newsService: NewsService, private readonly sanitizer: DomSanitizer) {
    super(assetService);
  }

  override ngOnInit() {
    super.ngOnInit();
    this.route.queryParamMap.subscribe((params) => {
      let id;
      if (params.has("article-id")) {
        id = Number.parseInt(params.get("article-id")!);
        this.newsService.getArticle(id).subscribe((a) => {
          this.article = a;
        });
      }
    });
  }

  isImage(text: string): boolean {
    return text.includes(IMAGE_DELIM);
  }

  extractSourceImage(text: string): string {
    return text.split(IMAGE_DELIM)[1];
  }

  extractSourceVideo(text: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(text.split(VIDEO_DELIM)[1]);
  }

  isVideo(text: string): boolean {
    return text.includes(VIDEO_DELIM);
  }
}
