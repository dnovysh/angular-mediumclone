import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {Router} from "@angular/router";

import {
  deleteArticleAction,
  deleteArticleFailureAction,
  deleteArticleSuccessAction
} from "src/app/article/store/actions/delete-article.action";
import {ArticleService} from "src/app/article/services/article.service";


@Injectable()
export class DeleteArticleEffect {
  constructor(private actions$: Actions,
              private articleService: ArticleService,
              private router: Router) {
  }

  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteArticleAction),
      switchMap(({slug}) => {
        return this.articleService.deleteArticle(slug).pipe(
          map(() => deleteArticleSuccessAction()),
          catchError(() => of(deleteArticleFailureAction()))
        )
      })
    ))

  redirectAfterDelete$ = createEffect(() => this.actions$.pipe(
      ofType(deleteArticleSuccessAction),
      tap(() => this.router.navigate(['/']))
    ),
    {dispatch: false}
  )
}
