import {Component, Input} from '@angular/core';
import {ArticleRef} from "../../../services/news-service";

@Component({
  selector: 'rtp-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.less']
})
export class NewsArticleComponent {
  @Input()
  articleRef: ArticleRef | undefined = undefined;
}
