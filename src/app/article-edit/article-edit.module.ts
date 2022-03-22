import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {RouterModule} from "@angular/router";

import {ArticleEditComponent} from './components/article-edit/article-edit.component';
import {ArticleEditService} from "src/app/article-edit/service/article-edit.service";
import {ArticleService as SharedArticleService} from "src/app/shared/services/article.service";
import {GetArticleEffect} from "src/app/article-edit/store/get-article.effect";
import {UpdateArticleEffect} from "src/app/article-edit/store/update-article.effect";
import {ArticleFormModule} from "src/app/shared/modules/article-form/article-form.module";
import {LoadingModule} from "src/app/shared/modules/loading/loading.module";
import {reducer} from "src/app/article-edit/store/reducers";


const routes = [
  {
    path: 'articles/:slug/edit',
    component: ArticleEditComponent
  }
]

@NgModule({
  declarations: [
    ArticleEditComponent
  ],
  imports: [
    CommonModule,
    ArticleFormModule,
    LoadingModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetArticleEffect, UpdateArticleEffect]),
    StoreModule.forFeature('articleEdit', reducer)
  ],
  providers: [
    ArticleEditService,
    SharedArticleService
  ]
})
export class ArticleEditModule {
}
