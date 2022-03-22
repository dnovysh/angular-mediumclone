import {Component, OnInit} from '@angular/core';
import {filter, map, Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";

import {ArticleInterface} from "src/app/shared/types/article.interface";
import {BackendErrorsInterface} from "src/app/auth/types/auth/backend-errors.interface";
import {ArticleInputInterface} from "src/app/shared/types/article-input.interface";
import {getArticleAction} from "src/app/article-edit/store/get-article.action";
import {updateArticleAction} from "src/app/article-edit/store/update-article.action";
import {
  articleSelector,
  errorsSelector,
  isLoadingSelector,
  isSubmittingSelector
} from "src/app/article-edit/store/selectors";


@Component({
  selector: 'mc-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {
  slug: string

  isLoading$: Observable<boolean>
  initialValues$: Observable<ArticleInputInterface>
  isSubmitting$: Observable<boolean>
  errors$: Observable<BackendErrorsInterface | null>

  constructor(private store: Store, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  private initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article: ArticleInterface) => {
        return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList
        }
      })
    )
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.errors$ = this.store.pipe(select(errorsSelector))
  }

  private fetchData(): void {
    this.store.dispatch(getArticleAction({slug: this.slug}))
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(updateArticleAction(
      {slug: this.slug, articleInput: articleInput}
    ))
  }
}
