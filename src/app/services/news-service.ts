import {Injectable, SecurityContext} from "@angular/core";
import {AssetService, Pinata} from "./asset-service";
import {LangUtils} from "../lang-utils";
import {Observable, of, Subject} from "rxjs";
import {DomSanitizer} from "@angular/platform-browser";

export const IMAGE_DELIM = '<IMAGE> : '
export const VIDEO_DELIM = '<VIDEO> : '

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private readonly assetSvc: AssetService, private readonly sanitizer: DomSanitizer) { }

  articles: ReadonlyArray<ArticleRef> = [];

  getAllArticles(): Observable<ReadonlyArray<ArticleRef>> {
    if (this.articles.length > 0) {
      return of(this.articles);
    } else {
      const articleSubject = new Subject<ReadonlyArray<ArticleRef>>();
      const list: Array<ArticleRef> = [];
      this.assetSvc.loadArticles().subscribe((articleRef) => {
        articleRef.forEach((ref) => list.push(ref));
        this.articles = list;
        articleSubject.next(this.articles);
      });
      return articleSubject.asObservable();
    }
  }

  getArticle(id: number): Observable<Article | undefined> {
    const articleSubject = new Subject<Article | undefined>();
    this.assetSvc.loadArticle(id).subscribe((p) => {
      articleSubject.next(p);
    });
    return articleSubject.asObservable();
  }
}

export interface ArticleRef {
  id: number;
  title: string;
  date: string;
  thumbnail: string;
}

export interface Article {
  id: number;
  title: string;
  date: string;
  textContent: Array<string>;
}
