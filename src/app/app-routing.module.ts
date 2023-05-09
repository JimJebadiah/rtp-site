import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import { ABOUT_PATH, CONTACT_PATH, DOWNLOAD_PATH, HOME_PATH, NEWS_PATH, POLICY_PATH, WIKI_PATH } from './services/routing-service';
import { ConstructionPageComponent } from './views/construction-page/construction-page.component';

const routes: Routes = [
  {path: HOME_PATH, component: HomePageComponent},
  {path: ABOUT_PATH, component: ConstructionPageComponent},
  {path: NEWS_PATH, component: ConstructionPageComponent},
  {path: DOWNLOAD_PATH, component: ConstructionPageComponent},
  {path: POLICY_PATH, component: ConstructionPageComponent},
  {path: CONTACT_PATH, component: ConstructionPageComponent},
  {path: WIKI_PATH, component: ConstructionPageComponent},
  {path: '', redirectTo: HOME_PATH, pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
