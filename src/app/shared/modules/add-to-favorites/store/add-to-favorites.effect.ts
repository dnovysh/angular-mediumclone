import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap} from "rxjs";

import {AddToFavoritesService} from "src/app/shared/modules/add-to-favorites/add-to-favorites.service";
import {
  addToFavoritesAction,
  addToFavoritesFailureAction,
  addToFavoritesSuccessAction
} from "src/app/shared/modules/add-to-favorites/store/add-to-favorites.action";
import {ArticleInterface} from "src/app/shared/types/article.interface";


@Injectable()
export class AddToFavoritesEffect {
  constructor(private actions$: Actions,
              private addToFavoritesService: AddToFavoritesService) {
  }

  addToFavorites$ = createEffect(() => this.actions$.pipe(
    ofType(addToFavoritesAction),
    switchMap(({isFavorited, slug}) => {
      const article$ = isFavorited
        ? this.addToFavoritesService.removeFromFavorites(slug)
        : this.addToFavoritesService.addToFavorites(slug)

      return article$.pipe(
        map((article: ArticleInterface) =>
          addToFavoritesSuccessAction({article})
        ),
        catchError(() => of(addToFavoritesFailureAction()))
      )
    })
  ))
}
