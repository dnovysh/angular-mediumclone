import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";

import {ArticleCreateComponent} from './components/article-create/article-create.component';
import {ArticleFormModule} from "src/app/shared/modules/article-form/article-form.module";
import {ArticleCreateService} from "src/app/article-create/services/article-create.service";
import {CreateArticleEffect} from "src/app/article-create/store/create-article.effect";
import {reducer} from "src/app/article-create/store/reducers";


const routes = [
  {
    path: 'articles/new',
    component: ArticleCreateComponent
  }
]

@NgModule({
  declarations: [
    ArticleCreateComponent
  ],
  imports: [
    CommonModule,
    ArticleFormModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature('articleCreate', reducer)
  ],
  providers: [
    ArticleCreateService
  ]
})
export class ArticleCreateModule {
}
