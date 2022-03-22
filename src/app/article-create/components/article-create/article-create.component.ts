import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";

import {ArticleInputInterface} from "src/app/shared/types/article-input.interface";
import {BackendErrorsInterface} from "src/app/auth/types/auth/backend-errors.interface";
import {errorsSelector, isSubmittingSelector} from "src/app/article-create/store/selectors";
import {createArticleAction} from "src/app/article-create/store/create-article.action";


@Component({
  selector: 'mc-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.scss']
})
export class ArticleCreateComponent implements OnInit {
  initialValues: ArticleInputInterface = {
    title: '',
    description: '',
    body: '',
    tagList: []
  }
  isSubmitting$: Observable<boolean>
  errors$: Observable<BackendErrorsInterface | null>

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.errors$ = this.store.pipe(select(errorsSelector))
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(createArticleAction({articleInput: articleInput}))
  }
}
