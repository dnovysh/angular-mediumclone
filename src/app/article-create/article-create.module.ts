import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ArticleCreateComponent} from './components/article-create/article-create.component';
import {RouterModule} from "@angular/router";


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
    RouterModule.forChild(routes)
  ]
})
export class ArticleCreateModule {
}
