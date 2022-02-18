import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap} from "rxjs";

import {ArticleService as SharedArticleService} from "src/app/shared/services/article.service";
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction
} from "src/app/article/article/store/actions/get-article.action";
import {ArticleInterface} from "src/app/shared/types/article.interface";

@Injectable()
export class GetArticleEffect {
  constructor(private actions$: Actions,
              private sharedArticleService: SharedArticleService) {
  }

  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({slug}) => {
        return this.sharedArticleService.getArticle(slug).pipe(
          map((article: ArticleInterface) =>
            getArticleSuccessAction({article})
          ),
          catchError(() => of(getArticleFailureAction()))
        )
      })
    ))
}
