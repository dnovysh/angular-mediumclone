import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

import {ArticleCreateService} from "src/app/article-create/services/article-create.service";
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction
} from "src/app/article-create/store/create-article.action";
import {ArticleInterface} from "src/app/shared/types/article.interface";

@Injectable()
export class CreateArticleEffect {
  constructor(private actions$: Actions,
              private articleCreateService: ArticleCreateService,
              private router: Router) {
  }

  createArticle$ = createEffect(() => this.actions$.pipe(
    ofType(createArticleAction),
    switchMap(({articleInput}) =>
      this.articleCreateService.createArticle(articleInput).pipe(
        map((article: ArticleInterface) => {
          return createArticleSuccessAction({article})
        }),
        catchError((errorResponse: HttpErrorResponse) =>
          of(createArticleFailureAction({errors: errorResponse.error.errors}))
        )
      )
    )
  ))

  redirectAfterCreate$ = createEffect(() => this.actions$.pipe(
      ofType(createArticleSuccessAction),
      tap(({article}) => this.router.navigate(['/articles', article.slug]))
    ),
    {dispatch: false}
  )
}
