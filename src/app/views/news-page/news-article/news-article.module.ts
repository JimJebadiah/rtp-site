import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsArticleComponent } from './news-article.component';



@NgModule({
  declarations: [
    NewsArticleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewsArticleComponent,
  ]
})
export class NewsArticleModule { }
