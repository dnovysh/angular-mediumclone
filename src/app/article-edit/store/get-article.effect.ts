import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap} from "rxjs";

import {ArticleInterface} from "src/app/shared/types/article.interface";
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction
} from "src/app/article-edit/store/get-article.action";
import {ArticleService as SharedArticleService} from "src/app/shared/services/article.service";

@Injectable()
export class GetArticleEffect {
  constructor(private actions$: Actions,
              private articleService: SharedArticleService) {
  }

  getArticle$ = createEffect(() => this.actions$.pipe(
    ofType(getArticleAction),
    switchMap(({slug}) =>
      this.articleService.getArticle(slug).pipe(
        map((article: ArticleInterface) =>
          getArticleSuccessAction({article})
        ),
        catchError(() => of(getArticleFailureAction()))
      )
    )
  ))
}
