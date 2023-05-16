import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import {
  ABOUT_PATH, ARTICLE_PATH,
  CONTACT_PATH,
  DOWNLOAD_PATH,
  HOME_PATH,
  NEW_ADDITIONS_PATH,
  NEWS_PATH, PINATA_PARAM, PINATA_PATH,
  POLICY_PATH
} from './services/routing-service';
import {PrivacyPolicyPageComponent} from "./views/privacy-policy-page/privacy-policy-page.component";
import {AboutPageComponent} from "./views/about-page/about-page.component";
import {NotFoundPageComponent} from "./views/not-found-page/not-found-page.component";
import {DownloadPageComponent} from "./views/download-page/download-page.component";
import {NewAdditionsPageComponent} from "./views/new-additions-page/new-additions-page.component";
import {PinataPageComponent} from "./views/new-additions-page/pinata-page/pinata-page.component";
import {
  NewAdditionsRootPageComponent
} from "./views/new-additions-page/new-additions-root-page/new-additions-root-page.component";
import {ContactPageComponent} from "./views/contact-page/contact-page.component";
import {NewsPageComponent} from "./views/news-page/news-page.component";
import {ArticlePageComponent} from "./views/article-page/article-page.component";
import {ConstructionPageComponent} from "./views/construction-page/construction-page.component";

const routes: Routes = [
  {path: HOME_PATH, component: HomePageComponent},
  {path: ABOUT_PATH, component: AboutPageComponent},
  {path: NEWS_PATH, component: NewsPageComponent},
  {path: ARTICLE_PATH, component: ArticlePageComponent},
  {path: DOWNLOAD_PATH, component: DownloadPageComponent},
  {path: POLICY_PATH, component: PrivacyPolicyPageComponent},
  {path: CONTACT_PATH, component: ContactPageComponent},
  {path: NEW_ADDITIONS_PATH, component: NewAdditionsPageComponent, children: [
    {path: `${PINATA_PATH}/:${PINATA_PARAM}`, component: PinataPageComponent},
    {path: '', component: NewAdditionsRootPageComponent}
  ]},
  {path: '', redirectTo: HOME_PATH, pathMatch: "full"},
  {path: '**', component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
