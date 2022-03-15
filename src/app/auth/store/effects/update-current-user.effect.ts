import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

import {AuthService} from "src/app/auth/services/auth.service";
import {CurrentUserInterface} from "src/app/shared/types/current-user.interface";
import {
  updateCurrentUserAction,
  updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction
} from "src/app/auth/store/actions/update-current-user.action";


@Injectable()
export class UpdateCurrentUserEffect {
  constructor(private actions$: Actions,
              private authService: AuthService) {
  }

  updateCurrrentUser$ = createEffect(() => this.actions$.pipe(
    ofType(updateCurrentUserAction),
    switchMap(({currentUserInput}) =>
      this.authService.updateCurrentUser(currentUserInput).pipe(
        map((currentUser: CurrentUserInterface) => {
          return updateCurrentUserSuccessAction({currentUser})
        }),
        catchError((errorResponse: HttpErrorResponse) =>
          of(updateCurrentUserFailureAction({errors: errorResponse.error.errors}))
        )
      )
    )
  ))
}
