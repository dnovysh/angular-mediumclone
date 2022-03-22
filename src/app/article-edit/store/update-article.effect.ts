import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

import {ArticleInterface} from "src/app/shared/types/article.interface";
import {ArticleEditService} from "src/app/article-edit/service/article-edit.service";
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction
} from "src/app/article-edit/store/update-article.action";

@Injectable()
export class UpdateArticleEffect {
  constructor(private actions$: Actions,
              private articleEditService: ArticleEditService,
              private router: Router) {
  }

  updateArticle$ = createEffect(() => this.actions$.pipe(
    ofType(updateArticleAction),
    switchMap(({slug, articleInput}) =>
      this.articleEditService.updateArticle(slug, articleInput).pipe(
        map((article: ArticleInterface) => {
          return updateArticleSuccessAction({article})
        }),
        catchError((errorResponse: HttpErrorResponse) =>
          of(updateArticleFailureAction({errors: errorResponse.error.errors}))
        )
      )
    )
  ))

  redirectAfterUpdate$ = createEffect(() => this.actions$.pipe(
      ofType(updateArticleSuccessAction),
      tap(({article}) => this.router.navigate(['/articles', article.slug]))
    ),
    {dispatch: false}
  )
}
