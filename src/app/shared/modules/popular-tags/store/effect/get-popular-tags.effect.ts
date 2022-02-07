import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap} from "rxjs";

import {PopularTagsService} from "src/app/shared/modules/popular-tags/services/popular-tags.service";
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction
} from "src/app/shared/modules/popular-tags/store/actions/get-popular-tags.action";
import {PopularTagType} from "src/app/shared/types/popular-tag.type";

@Injectable()
export class GetPopularTagsEffect {
  constructor(private actions$: Actions,
              private popularTagsService: PopularTagsService) {
  }

  getPopularTags$ = createEffect(() => this.actions$.pipe(
    ofType(getPopularTagsAction),
    switchMap(() => {
      return this.popularTagsService.getPopularTags().pipe(
        map((popularTags: PopularTagType[]) =>
          getPopularTagsSuccessAction({popularTags})
        ),
        catchError(() => of(getPopularTagsFailureAction()))
      )
    })
  ))
}
