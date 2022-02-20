import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Action, StoreModule} from "@ngrx/store";
import {RouterModule, Routes} from "@angular/router";

import {ArticleComponent} from 'src/app/article/components/article/article.component';
import {ArticleService as SharedArticleService} from "src/app/shared/services/article.service";
import {ErrorMessageModule} from "src/app/shared/modules/error-message/error-message.module";
import {LoadingModule} from "src/app/shared/modules/loading/loading.module";
import {reducer} from "src/app/article/store/reducers";
import {EffectsModule} from "@ngrx/effects";
import {GetArticleEffect} from "src/app/article/store/effects/get-article.effect";
import {ArticleStateInterface} from "src/app/article/types/article-state.interface";
import {TagListModule} from "src/app/shared/modules/tag-list/tag-list.module";
import {ArticleService} from "src/app/article/services/article.service";
import {DeleteArticleEffect} from "src/app/article/store/effects/delete-article.effect";


const routes: Routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent
  }
]

@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ErrorMessageModule,
    LoadingModule,
    TagListModule,
    StoreModule.forFeature<ArticleStateInterface, Action>('article', reducer),
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect])
  ],
  providers: [
    SharedArticleService,
    ArticleService
  ]
})
export class ArticleModule {
}
