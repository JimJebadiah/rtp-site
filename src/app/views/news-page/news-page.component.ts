import {Component, OnInit} from '@angular/core';
import {AbstractPage} from "../abstract-page";
import {AssetService} from "../../services/asset-service";
import {ArticleRef, NewsService} from "../../services/news-service";

@Component({
  selector: 'rtp-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.less']
})
export class NewsPageComponent extends AbstractPage implements OnInit{
  articles: ReadonlyArray<ArticleRef> = [];

  constructor(
    assetService: AssetService,
    private readonly newsService: NewsService,
  ) {
    super(assetService);
  }

  override ngOnInit() {
    super.ngOnInit();
    this.newsService.getAllArticles().subscribe((articles) => {
      this.articles = articles;
    });
  }
}
