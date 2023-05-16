import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewsPageComponent} from "./news-page.component";
import {NewsArticleModule} from "./news-article/news-article.module";
import {RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    NewsPageComponent,
  ],
  imports: [
    CommonModule,
    NewsArticleModule,
    RouterOutlet,
  ],
  exports: [
    NewsPageComponent,
  ]
})
export class NewsPageModule { }
